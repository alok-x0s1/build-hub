import { Loader } from "lucide-react";
import { Suspense } from "react";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-screen">
			<Suspense
				fallback={
					<div className="flex items-center justify-center w-full min-h-screen">
						<Loader className="size-5 animate-spin" />
					</div>
				}
			>
				{children}
			</Suspense>
		</div>
	);
}
