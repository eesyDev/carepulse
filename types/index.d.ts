/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "Male" | "Female" | "Other";
  declare type Status = "pending" | "scheduled" | "cancelled";
  
  declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
  }
  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  declare interface RegisterUserParams extends CreateUserParams {
    userId: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    occupation: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    primaryPhysician: string;
    insuranceProvider: string;
    insurancePolicyNumber: string;
    allergies?: string | undefined;
    currentMedication?: string | undefined;
    familyMedicalHistory?: string | undefined;
    pastMedicalHistory?: string | undefined;
    identificationType?: string | undefined;
    identificationNumber?: string | undefined;
    identificationDocument?: FormData | undefined;
    privacyConsent: boolean;
  }

  declare type CreateAppointmentParams = {
    userId: string;
    patient: string;
    primaryPhysician: string;
    reason: string;
    schedule: Date;
    status: Status;
    note: string | undefined;
  };
  
  declare type UpdateAppointmentParams = {
    appointmentId: string;
    userId: string;
    // timeZone: string;
    appointment: Appointment;
    type: string;
  };

  declare interface AppointmentFormProps {
    type: "create" | "cancel" | "schedule";
    userId: string;
    patientId: string;
    appointment?: Appointment;
    setOpen: (visible: boolean) => void;
  }

  declare interface StatCardProps {
    type: "appointments" | "pending" | "cancelled";
    count: number;
    label: string;
    icon: string;
  }

  declare interface AppointmnetDataProps {
    userId: string;
    patient: User;
    primaryPhysician: string;
    status: Status;
    schedule: Date;
  }

declare interface AppointmentModalProps {
  patientId: string;
    userId: string;
    appointment?: Appointment;
    type: "schedule" | "cancel";
    title: string;
    description: string;
}