import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CallToActionSection from './CallToActionSection';

export default function Home() {
	return (
		<main className="flex-1">
			<HeroSection />
			<FeaturesSection />
			<CallToActionSection />
		</main>
	);
}
