import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function EmptyState({
	message,
	icon: Icon,
	className,
}: {
	message: string;
	icon?: LucideIcon;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"empty-state h-65 flex flex-col justify-center items-center",
				className,
			)}
		>
			{Icon && (
				<Icon className="size-12 text-muted-foreground/90 mx-auto mb-4" />
			)}
			<p className="text-lg text-muted-foreground">{message}</p>
		</div>
	);
}
