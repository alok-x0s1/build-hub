"use client";

import { useState } from "react";
import { Loader2Icon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteProductAction } from "@/lib/admin/admin-actions";
import { ProductType } from "@/types";

export default function DeleteProduct({
	productId,
}: {
	productId: ProductType["id"];
}) {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const handleDelete = async () => {
		try {
			setLoading(true);
			await deleteProductAction(productId);

			setOpen(false);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Button variant="outline">
					<Trash2Icon className="size-4" />
					Delete
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you sure you want to delete?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						delete the product.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel disabled={loading}>
						Cancel
					</AlertDialogCancel>

					<AlertDialogAction
						onClick={handleDelete}
						disabled={loading}
						className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
					>
						{loading ? (
							<Loader2Icon className="size-4 animate-spin" />
						) : (
							<Trash2Icon className="size-4" />
						)}
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
