"use client";

import { useState } from "react";
import { CheckCircleIcon, Loader2Icon, XCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	approveProductAction,
	rejectProductAction,
} from "@/lib/admin/admin-actions";
import { ProductType } from "@/types";

export default function AdminActions({
	status,
	productId,
}: {
	status: string;
	productId: ProductType["id"];
}) {
	const [loading, setLoading] = useState<"approve" | "reject" | null>(null);

	const handleApprove = async () => {
		setLoading("approve");
		await approveProductAction(productId);
		setLoading(null);
	};

	const handleReject = async () => {
		setLoading("reject");
		await rejectProductAction(productId);
		setLoading(null);
	};

	return (
		<div className="space-y-2">
			{status === "pending" && (
				<div className="flex gap-2">
					<Button
						variant="default"
						className="hover:cursor-pointer"
						onClick={handleApprove}
						disabled={loading !== null}
					>
						{loading === "approve" ? (
							<Loader2Icon className="size-4 animate-spin" />
						) : (
							<CheckCircleIcon className="size-4" />
						)}
						Approve
					</Button>

					<Button
						variant="destructive"
						className="hover:cursor-pointer"
						onClick={handleReject}
						disabled={loading !== null}
					>
						{loading === "reject" ? (
							<Loader2Icon className="size-4 animate-spin" />
						) : (
							<XCircleIcon className="size-4" />
						)}
						Reject
					</Button>
				</div>
			)}
		</div>
	);
}
