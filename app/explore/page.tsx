"use cache";

import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getFeaturedProducts } from "@/lib/products/product-select";
import { ZodiacAries } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Explore Products - BuildHub",
	description: "Browse and discover amazing projects from our community",
};

export default async function ExplorePage() {
	const products = await getFeaturedProducts();

	return (
		<div className="py-20 pt-10">
			<div className="wrapper">
				<div className="mb-12">
					<SectionHeader
						title="Explore Products"
						icon={ZodiacAries}
						description="Browse and discover amazing projects from our community"
					/>
				</div>
				<ProductExplorer products={products} />
			</div>
		</div>
	);
}
