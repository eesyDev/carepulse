"use server";

import { parseStringify } from "../utils";
import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases } from "../appwrite.config";
import { Appointment } from "@/types/appwrite.type";

export const createAppointment = async (appointment: CreateAppointmentParams) => {
    console.log("Creating appointment with values:", appointment);
    try {
        const newAppointment = await databases.createDocument(
            process.env.DATABASE_ID!,
            process.env.APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            appointment
          );
      console.log("New appointment created:", newAppointment);
          revalidatePath("/admin");
          return parseStringify(newAppointment);
    } catch (err) {
        console.error("Error creating appointment:", err);
        throw new Error("Failed to create appointment");
    }
}

export const getAppontment = async (appointmentId: string) => {
    try {
        const appointment = await databases.getDocument(
            process.env.DATABASE_ID!,
            process.env.APPOINTMENT_COLLECTION_ID!,
            appointmentId
        );
        return parseStringify(appointment);
    } catch(err) {
        console.error("Error to get appointment:", err);
        throw new Error("Failed to get appointment");
    }
}


export const getRecentAppointmentList = async () => {
    try {
      const appointments = await databases.listDocuments(
        process.env.DATABASE_ID!,
        process.env.APPOINTMENT_COLLECTION_ID!,
        [Query.orderDesc("$createdAt")]
      );

      const initialCounts = {
        scheduledCount: 0,
        pendingCount: 0,
        cancelledCount: 0,
      };
  
      const counts = (appointments.documents as Appointment[]).reduce(
        (acc, appointment) => {
          switch (appointment.status) {
            case "scheduled":
              acc.scheduledCount++;
              break;
            case "pending":
              acc.pendingCount++;
              break;
            case "cancelled":
              acc.cancelledCount++;
              break;
          }
          return acc;
        },
        initialCounts
      );
  
      const data = {
        totalCount: appointments.total,
        ...counts,
        documents: appointments.documents,
      };
  
      return parseStringify(data);
    } catch (error) {
      console.error(
        "An error occurred while retrieving the recent appointments:",
        error
      );
    }
  };