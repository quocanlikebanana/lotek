import RegisterCard from "./RegisterCard";
import LogoAndBrand from "@/components/partial/LogoAndBrand";

export default function RegisterPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center pt-4 pb-16 relative overflow-hidden">
			<div className="w-full max-w-md relative z-10">
				<LogoAndBrand />
				<RegisterCard />
			</div>
		</div>
	);
}



