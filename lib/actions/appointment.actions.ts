"use server";

import { parseStringify } from "../utils";
import { revalidatePath } from "next/cache";
import { ID } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases } from "../appwrite.config";

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
        console.error("Error creating appointment:", err);
        throw new Error("Failed to create appointment");
    }
}