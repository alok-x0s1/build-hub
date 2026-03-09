import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparkleIcon, ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-[92vh] flex flex-col">
			<main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
				<div className="text-center space-y-6 max-w-2xl mx-auto">
					<div className="inline-flex items-center justify-center size-24 rounded-full bg-primary/10 mb-6">
						<SparkleIcon className="h-12 w-12 text-primary" />
					</div>

					<h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
						404
					</h1>

					<h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
						Oops! Page not found
					</h2>

					<p className="mt-4 text-lg text-muted-foreground">
						The page you&apos;re looking for doesn&apos;t exist or
						has been moved. Let&apos;s get you back on track.
					</p>

					<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
						<Button asChild size="lg" className="gap-2">
							<Link href="/">
								<ArrowLeftIcon className="h-4 w-4" />
								Back to Home
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/explore">Explore Products</Link>
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
