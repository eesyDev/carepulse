"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { PatientFormValidation } from "@/lib/validation";
import { registerPatient } from "@/lib/actions/patient.actions";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Doctors, GenderOptions, IdentificationTypes, PatientFormDefaultValues } from "@/constans";
import { Label } from "@/components/ui/label";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import FileUploader from "../FileUploader";

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

const RegisterForm = ({ user }: { user: User }) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof PatientFormValidation>>({
        resolver: zodResolver(PatientFormValidation),
        defaultValues: {
            ...PatientFormDefaultValues,
            name: "",
            email: "",
            phone: ""
        },
    })

async function onSubmit(values: z.infer<typeof PatientFormValidation>) {
        setIsLoading(true);

        let formData;

        if(values.identificationDocument && values.identificationDocument.length > 0) {
            const blobFile = new Blob([values.identificationDocument[0]], { type: values.identificationDocument[0].type });

            formData = new FormData();
            formData.append("blobFile", blobFile);
            formData.append("fileName", values.identificationDocument[0].name);
        }
        try {
            const patientData = {
                ...values,
                userId: user.$id,
                birthDate: new Date(values.birthDate),
                identificationDocument: formData,
            }
            
            const patient = await registerPatient(patientData);

            if (patient) router.push(`/patient/${user.$id}/new-appointment`);
        } catch (error) {
            console.error("Error submitting form:", error)
        }
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
                <section className="space-y-4">
                    <h1 className="header">Welcome 🙌</h1>
                    <p className="text-dark-600">Let us know more about yourself.</p>
                </section>
                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Personal Information</h2>
                    </div>
                </section>
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    label="Full name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name="email"
                        label="Email"
                        placeholder="john.doe@gmail.com"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"
                    />

                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.PHONE_INPUT}
                        name="phone"
                        label="Phone number"
                        placeholder="(000) - 555 - 11 - 22"
                        iconSrc="/assets/icons/phone.svg"
                        iconAlt="phone"
                    />
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.DATE_PICKER}
                        name="birthDate"
                        label="Date of Birth"
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.SKELETON}
                        name="gender"
                        label="Gender"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <RadioGroup
                                    className="flex h-11 gap-6 xl:justify-between"
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {GenderOptions.map((option) =>(
                                        <div className="radio-group" key={option}>
                                            <RadioGroupItem
                                                value={option}
                                                id={option}
                                            />
                                            <Label htmlFor={option}className="cursor-pointer">{option}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name="address"
                        label="Address"
                        placeholder="68A Street Name, City"
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name="occupation"
                        label="Occupation"
                        placeholder="Software Engineer"
                    />
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name="emergencyContactName"
                        label="Emergency contact name"
                        placeholder="Guardian's name"
                    />

                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.PHONE_INPUT}
                        name="emergencyContactNumber"
                        label="Emergency contact number"
                        placeholder="(000) - 555 - 11 - 22"
                    />
                </div>
                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Medical Information</h2>
                    </div>
                </section>
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.SELECT}
                    name="primaryPhysician"
                    label="Primary physician"
                    placeholder="Select a physician"
                >
                    {Doctors.map((doctor) => (
                        <SelectItem
                            key={doctor.name}
                            value={doctor.name}
                        >
                            <div className="flex cursor-pointer items-center gap-2">
                                <Image
                                    width={32}
                                    height={32}
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="rounded-full border border-dark-500"
                                />
                                <p>{doctor.name}</p>
                            </div>
                        </SelectItem>
                    ))}
                </CustomFormField>
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name="insuranceProvider"
                        label="Insurance provider"
                        placeholder="Blue Shield, Aetna, etc."
                    />

                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name="insurancePolicyNumber"
                        label="Insurance policy number"
                        placeholder="ABC1234567890"
                    />
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.TEXTAREA}
                        name="allergies"
                        label="Allergies (if any)"
                        placeholder="Peanuts, Penicillin, etc."
                    />

                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.TEXTAREA}
                        name="currentMedications"
                        label="Current medications"
                        placeholder="Paracetamol, Ibuprofen, etc."
                    />
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.TEXTAREA}
                        name="familyMedicalHistory"
                        label="Family medical history"
                        placeholder="Heart disease, Diabetes, etc."
                    />

                    <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.TEXTAREA}
                        name="pastMedicalHistory"
                        label="Past medical history"
                        placeholder="Surgery, Chronic conditions, etc."
                    />
                </div>
                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Identification and Verification</h2>
                    </div>
                </section>
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.SELECT}
                    name="identificationType"
                    label="Identification type"
                    placeholder="Select an identification type"
                >
                    {IdentificationTypes.map((item) => (
                        <SelectItem
                            key={item}
                            value={item}
                        >
                            <div className="flex cursor-pointer items-center gap-2">
                                <p>{item}</p>
                            </div>
                        </SelectItem>
                    ))}
                </CustomFormField>
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="identificationNumber"
                    label="Identification number"
                    placeholder="123456789"
                />
                 <CustomFormField
                    fieldType={FormFieldType.SKELETON}
                    control={form.control}
                    name="identificationDocument"
                    label="Scanned Copy of Identification Document"
                    renderSkeleton={(field) => (
                    <FormControl>
                        <FileUploader files={field.value} onChange={field.onChange} />
                    </FormControl>
                    )}
                />
                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Consent and Privacy</h2>
                    </div>

                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        control={form.control}
                        name="treatmentConsent"
                        label="I consent to receive treatment for my health condition."
                    />

                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        control={form.control}
                        name="disclosureConsent"
                        label="I consent to the use and disclosure of my health
                        information for treatment purposes."
                    />

                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        control={form.control}
                        name="privacyConsent"
                        label="I acknowledge that I have reviewed and agree to the
                        privacy policy"
                    />
                    </section>

                <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
            </form>
        </Form>
    )
}

export default RegisterForm