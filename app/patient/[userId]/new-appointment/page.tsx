import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/PatientForm";
import Copyright from "@/components/Copyright";


const NewAppointment = () => {
  return (
    <div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[860px] flex-1 justify-between">
					<Image
						src="/assets/icons/logo-full.svg"
						height={1000}
						width={1000}
						alt="Logo"
						className="mb-12 h-10 w-fit"
					/>
					<PatientForm />
					<Copyright/>
				</div>
			</section>
			<Image
				src='/assets/images/appointment-img.png'
				height={1000}
				width={1000} 
				alt="appiontment"
				className="side-img max-w-[390px] bg-bottom"		
				/>
		</div>
  )
}

export default NewAppointment