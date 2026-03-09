import SectionHeader from "@/components/common/section-header";
import ProductSubmitForm from "@/components/products/product-submit-form";
import { Cctv } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Submit Product - BuildHub",
	description:
		"Share your creation with the community. Your submission will be reviewed before going live.",
};

export default function SubmitPage() {
	return (
		<section className="py-20 pt-10">
			<div className="wrapper">
				<div className="mb-12">
					<SectionHeader
						title="Submit Your Product"
						icon={Cctv}
						description="Share your creation with the community. Your submission will be reviewed before going live."
					/>
				</div>
				<div className="max-w-2xl mx-auto">
					<ProductSubmitForm />
				</div>
			</div>
		</section>
	);
}
