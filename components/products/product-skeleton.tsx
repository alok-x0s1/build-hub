import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton() {
	return (
		<div className="grid-wrapper">
			{Array.from({ length: 6 }).map((_, i) => (
				<Card key={i} className="min-h-45">
					<CardHeader>
						<div className="flex items-start gap-4">
							<div className="flex-1 space-y-2">
								<Skeleton className="h-6 w-40" />
								<Skeleton className="h-5 w-full" />
								<Skeleton className="h-5 w-3/4" />
							</div>

							<div className="flex flex-col gap-2 mt-2 justify-center items-center">
								<Skeleton className="h-5 w-8 rounded-md" />
								<Skeleton className="h-10 w-12 rounded-md" />
								<Skeleton className="h-5 w-8 rounded-md" />
							</div>
						</div>
					</CardHeader>

					<CardFooter>
						<div className="flex gap-2">
							<Skeleton className="h-6 w-16 rounded-full" />
							<Skeleton className="h-6 w-16 rounded-full" />
							<Skeleton className="h-6 w-16 rounded-full" />
						</div>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
