import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ArchiveRestore,
	CloudDrizzle,
	Contact,
	Flame,
	FolderHeart,
	Forward,
	GlobeLock,
	HandFist,
	LockKeyhole,
	Microscope,
	ShelvingUnit,
	ShieldQuestionMark,
	Shredder,
	VectorSquare
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About Us - BuildHub",
	description:
		"Learn about BuildHub's mission to connect creators and build a community of authentic builders sharing real projects.",
};

export default function AboutPage() {
	return (
		<div className="py-20 pt-10">
			<div className="wrapper max-w-6xl mx-auto">
				<div className="mb-6">
					<>
						<div className="flex items-center gap-2 mb-3">
							<FolderHeart className="size-6 text-primary" />
							<h2 className="text-3xl font-bold">
								About Build
								<span className="text-primary">Hub</span>
							</h2>
						</div>
						<p className="text-muted-foreground text-lg">
							A platform built by creators, for creators. We
							believe in authentic building and genuine community.
						</p>
					</>
				</div>

				<div className="max-w-6xl mx-auto space-y-10">
					<section>
						<Card className="border-primary/20">
							<CardHeader className="text-center">
								<HandFist className="size-12 text-primary mx-auto mb-4" />
								<CardTitle className="text-2xl">
									Our Mission
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<CardDescription className="text-base leading-relaxed">
									BuildHub exists to create a genuine
									community where real builders can share
									their authentic creations. We&apos;re tired
									of fake launches and artificial hype. Our
									platform is designed to showcase actual
									projects from actual creators, fostering
									meaningful connections and constructive
									feedback.
								</CardDescription>
							</CardContent>
						</Card>
					</section>

					<section>
						<SectionHeader
							title="Our Values"
							icon={ArchiveRestore}
							description="The principles that guide everything we do"
						/>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
							<Card className="card-hover">
								<CardHeader className="text-center">
									<LockKeyhole className="size-8 text-primary mx-auto mb-2" />
									<CardTitle className="text-lg">
										Authenticity
									</CardTitle>
								</CardHeader>
								<CardContent className="text-center">
									<CardDescription>
										We verify real builders and real
										projects. No fake launches, no
										artificial engagement, just genuine
										creation.
									</CardDescription>
								</CardContent>
							</Card>

							<Card className="card-hover">
								<CardHeader className="text-center">
									<Contact className="size-8 text-primary mx-auto mb-2" />
									<CardTitle className="text-lg">
										Community
									</CardTitle>
								</CardHeader>
								<CardContent className="text-center">
									<CardDescription>
										We foster a supportive environment where
										builders can connect, learn, and grow
										together.
									</CardDescription>
								</CardContent>
							</Card>

							<Card className="card-hover">
								<CardHeader className="text-center">
									<Microscope className="size-8 text-primary mx-auto mb-2" />
									<CardTitle className="text-lg">
										Innovation
									</CardTitle>
								</CardHeader>
								<CardContent className="text-center">
									<CardDescription>
										We celebrate creativity and push the
										boundaries of what&apos;s possible in
										the builder ecosystem.
									</CardDescription>
								</CardContent>
							</Card>
						</div>
					</section>

					<section>
						<SectionHeader
							title="What Makes Us Different"
							icon={VectorSquare}
							description="Features designed for real builders"
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
							<Card className="card-hover">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Flame className="size-5 text-primary" />
										Quality Curation
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Every submission is reviewed to ensure
										it meets our quality standards.
									</CardDescription>
								</CardContent>
							</Card>

							<Card className="card-hover">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<GlobeLock className="size-5 text-primary" />
										Global Reach
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Connect with builders from around the
										world.
									</CardDescription>
								</CardContent>
							</Card>

							<Card className="card-hover">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<ShelvingUnit className="size-5 text-primary" />
										Real Community
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Join a community of genuine builders.
									</CardDescription>
								</CardContent>
							</Card>

							<Card className="card-hover">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<ShieldQuestionMark className="size-5 text-primary" />
										Trust & Safety
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										We maintain a safe environment with
										proper moderation.
									</CardDescription>
								</CardContent>
							</Card>
						</div>
					</section>

					<section>
						<SectionHeader
							title="Our Story"
							icon={CloudDrizzle}
							description="How BuildHub came to be"
						/>

						<Card className="border-secondary/40 mt-4">
							<CardContent>
								<div className="space-y-2 text-muted-foreground">
									<p>
										BuildHub was born from frustration with
										the current state of product launch
										platforms.
									</p>
									<p>
										We wanted to create something
										different—a platform where real builders
										could share genuine work.
									</p>
									<p>
										Today BuildHub has grown into a thriving
										community of creators around the world.
									</p>
								</div>
							</CardContent>
						</Card>
					</section>

					<section className="text-center">
						<Card className="border-primary/20 bg-primary/5">
							<CardHeader>
								<CardTitle className="text-2xl">
									Join Our Community
								</CardTitle>
								<CardDescription className="text-base">
									Be part of a platform that values authentic
									building.
								</CardDescription>
							</CardHeader>

							<CardContent>
								<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
									<Button
										asChild
										size="lg"
										className="text-base px-8 shadow-lg"
									>
										<Link href="/submit">
											<Shredder className="size-5" />
											Submit Your Project
										</Link>
									</Button>

									<Button
										asChild
										size="lg"
										className="text-base px-8 shadow-lg"
										variant="secondary"
									>
										<Link href="/explore">
											Explore Projects{" "}
											<Forward className="size-5" />
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</section>
				</div>
			</div>
		</div>
	);
}
