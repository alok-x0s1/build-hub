"use client";

import { ProductType } from "@/types";
import AdminProductCard from "./admin-product-card";
import { useMemo, useState } from "react";
import { Pagination } from "../pagination";
import EmptyState from "../common/empty-state";
import { LucideIcon, Sunrise } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminProducts({
	products,
	emptyMessage,
	emptyIcon,
	headerMessage,
}: {
	products: ProductType[];
	emptyMessage: string;
	emptyIcon?: LucideIcon;
	headerMessage: string;
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const totalPages = Math.ceil(products.length / itemsPerPage);

	const paginatedProducts = useMemo(() => {
		const start = (currentPage - 1) * itemsPerPage;
		const end = start + itemsPerPage;

		return products.slice(start, end);
	}, [products, currentPage]);

	return (
		<section className="my-12">
			<div className="section-header-with-count">
				<h2 className="text-2xl font-bold">{headerMessage}</h2>
			</div>
			<div className="">
				{products.length === 0 ? (
					<EmptyState
						message={emptyMessage}
						icon={emptyIcon || Sunrise}
					/>
				) : (
					<div
						className={cn(
							"space-y-4",
							totalPages > 1 && "min-h-316",
						)}
					>
						{paginatedProducts.map((product) => (
							<AdminProductCard
								key={product.id}
								product={product}
							/>
						))}
					</div>
				)}
			</div>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</section>
	);
}
