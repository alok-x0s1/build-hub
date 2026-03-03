"use cache";

import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, HatGlasses, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";
import EmptyState from "@/components/common/empty-state";

export default async function FeaturedProducts() {
	const products = await getFeaturedProducts();
	const featuredProducts = products.filter(
		(product) => product.voteCount > 500,
	);

	return (
		<section className="py-20 bg-muted/20">
			<div className="wrapper">
				<div className="flex items-center justify-between mb-8">
					<SectionHeader
						title="Featured Today"
						icon={StarIcon}
						description="Top picks from our community this week"
					/>
					<Button
						variant="outline"
						asChild
						className="hidden sm:flex"
					>
						<Link href="/explore">
							View All <ArrowUpRightIcon className="size-4" />
						</Link>
					</Button>
				</div>

				{featuredProducts.length > 0 ? (
					<div className="grid-wrapper min-h-100">
						{featuredProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				) : (
					<EmptyState
						message="No featured products today. Check back tomorrow!"
						icon={HatGlasses}
					/>
				)}
			</div>
		</section>
	);
}
