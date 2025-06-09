import Copyright from "@/components/Copyright";
import PasskeyModal from "@/components/PasskeyModal";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home({ searchParams }: SearchParamProps) {
	const isAdmin = searchParams.admin === "true";
	return (
		<div className="flex h-screen max-h-screen">
			{ isAdmin && <PasskeyModal/>}
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<Image
						src="/assets/icons/logo-full.svg"
						height={1000}
						width={1000}
						alt="Logo"
						className="mb-12 h-10 w-fit"
					/>
					<PatientForm />
					<Copyright isAdmin/>
				</div>
			</section>
			<Image
				src='/assets/images/onboarding-img.png'
				height={1000}
				width={1000} 
				alt="patient"
				className="side-img max-w-[50%]"		
				/>
		</div>
	);
}
