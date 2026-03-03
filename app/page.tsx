import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunched from "@/components/landing-page/recently-launched";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturedProducts />
			<RecentlyLaunched />
		</>
	);
}
