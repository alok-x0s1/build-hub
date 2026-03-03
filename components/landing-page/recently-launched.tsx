import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";
import { Suspense } from "react";
import ProductsSkeleton from "../products/product-skeleton";

export default function RecentlyLaunched() {
	return (
		<section className="py-20 pt-12">
			<div className="wrapper space-y-12">
				<SectionHeader
					title="Recently Launched"
					icon={RocketIcon}
					description="Discover the latest products from our community"
				/>

				<Suspense fallback={<ProductsSkeleton />}>
					<RecentlyLaunchedProducts />
				</Suspense>
			</div>
		</section>
	);
}

async function RecentlyLaunchedProducts() {
	const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

	return recentlyLaunchedProducts.length > 0 ? (
		<div className="grid-wrapper min-h-100">
			{recentlyLaunchedProducts.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	) : (
		<EmptyState
			message="No products launched in the last week. Check back soon for new launches."
			icon={CalendarIcon}
		/>
	);
}
