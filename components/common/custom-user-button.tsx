"use client";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton, useUser } from "@clerk/nextjs";
import {
	BrickWallShield,
	Building2,
	CloudAlert,
	Forward,
	MailQuestionMark,
	NotebookPen,
	Siren,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CustomUserButton() {
	const router = useRouter();
	const { user } = useUser();

	const isAdmin = (user?.publicMetadata?.isAdmin as boolean) ?? false;

	return (
		<UserButton>
			<UserButton.UserProfilePage
				label="Organizations"
				labelIcon={<Building2 className="size-4" />}
				url="organization"
			>
				<div className="space-y-4 p-4">
					<div className="relative overflow-hidden rounded-lg bg-linear-to-br from-blue-500/20 via-blue-500/10 to-background border border-blue-500/20 backdrop-blur-sm">
						<div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent" />
						<div className="relative p-4">
							<div className="flex items-center gap-3">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg">
									<Building2 className="size-6" />
								</div>
								<div className="flex-1">
									<h2 className="text-lg font-bold text-foreground">
										Organizations
									</h2>
									<p className="text-xs text-muted-foreground">
										Team Collaboration
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-card/95 bg-card/50 p-4 space-y-4">
						<div className="flex items-center gap-2">
							<h3 className="text-sm font-medium text-foreground">
								Organization Benefits
							</h3>
						</div>

						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
									<svg
										className="size-3"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										Team Collaboration
									</p>
									<p className="text-xs text-muted-foreground">
										Work together with your team on shared
										projects
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
									<svg
										className="size-3"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										Shared Resources
									</p>
									<p className="text-xs text-muted-foreground">
										Access and manage team products and
										submissions
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
									<svg
										className="size-3"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										Role Management
									</p>
									<p className="text-xs text-muted-foreground">
										Assign different roles and permissions
										to team members
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
									<svg
										className="size-3"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										Centralized Billing
									</p>
									<p className="text-xs text-muted-foreground">
										Manage subscriptions and payments for
										your entire team
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/50 space-y-3">
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 border border-blue-200">
								<NotebookPen className="size-4" />
							</div>
							<h3 className="text-sm font-medium text-blue-800">
								Getting Started
							</h3>
						</div>

						<div className="space-y-2">
							<p className="text-xs text-blue-700 dark:text-blue-300">
								Create or join an organization to start
								collaborating with your team and unlock powerful
								team features.
							</p>

							<div className="rounded-lg bg-blue-100 p-3 border border-blue-200 space-y-2">
								<div className="flex items-start gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white text-xs font-bold">
										1
									</span>
									<span className="text-xs font-medium text-blue-800 dark:text-blue-200">
										Create Organization
									</span>
								</div>
								<p className="text-xs text-blue-700 dark:text-blue-300 ml-2">
									Set up your team workspace with a name and
									description
								</p>

								<div className="flex items-start gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white text-xs font-bold">
										2
									</span>
									<span className="text-xs font-medium text-blue-800 dark:text-blue-200">
										Invite Members
									</span>
								</div>
								<p className="text-xs text-blue-700 dark:text-blue-300 ml-2">
									Add team members via email invitations
								</p>

								<div className="flex items-start gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white text-xs font-bold">
										3
									</span>
									<span className="text-xs font-medium text-blue-800 dark:text-blue-200">
										Start Collaborating
									</span>
								</div>
								<p className="text-xs text-blue-700 dark:text-blue-300 ml-2">
									Share products and work together on projects
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-muted/30 bg-muted/30 p-3">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="h-2 w-2 rounded-full bg-blue-400" />
								<span className="text-xs font-medium text-muted-foreground">
									Organization Status
								</span>
							</div>
							<span className="text-xs font-medium text-blue-600 dark:text-blue-400">
								Personal Account
							</span>
						</div>
					</div>

					<div className="space-y-2">
						<p className="font-medium text-muted-foreground">
							Manage Organizations
						</p>
						<OrganizationSwitcher
							hidePersonal={false}
							afterCreateOrganizationUrl={"/submit"}
							afterSelectPersonalUrl={"/submit"}
							appearance={{
								elements: {
									rootBox: "w-full",
								},
							}}
						/>
					</div>

					<p className="text-xs flex gap-1 items-start">
						<CloudAlert className="size-4 mr-1" /> To create an
						organization, select your organization from the
						dropdown. And then, create a new organization.
					</p>
				</div>
			</UserButton.UserProfilePage>
			<UserButton.UserProfilePage
				label="Admin"
				labelIcon={<BrickWallShield className="size-4" />}
				url="admin"
			>
				<div className="w-full space-y-4 p-4">
					<div className="relative overflow-hidden rounded-lg bg-linear-to-br from-primary/20 via-primary/10 to-background border border-primary/20 backdrop-blur-sm">
						<div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent" />
						<div className="relative p-4">
							<div className="flex items-center gap-3">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
									<BrickWallShield className="size-6" />
								</div>
								<div className="flex-1">
									<h2 className="text-lg font-bold text-foreground">
										Admin Portal
									</h2>
									<p className="text-xs text-muted-foreground">
										Platform Management
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-card/95 bg-card/50 p-4 space-y-4">
						<div className="flex items-center gap-2">
							<h3 className="text-sm font-medium text-foreground">
								Admin Capabilities
							</h3>
						</div>

						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
									<svg
										className="size-3"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										User Management
									</p>
									<p className="text-xs text-muted-foreground">
										Approve user registrations and manage
										permissions
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
									<svg
										className="size-3"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										Product Control
									</p>
									<p className="text-xs text-muted-foreground">
										Review, approve, reject, and manage
										submitted products
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
									<svg
										className="size-3"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										Platform Oversight
									</p>
									<p className="text-xs text-muted-foreground">
										Monitor activity, view analytics, and
										system health
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50 space-y-3">
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 border border-amber-300">
								<Siren className="size-4" />
							</div>
							<h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">
								Admin Access Required
							</h3>
						</div>

						<div className="space-y-2">
							<p className="text-xs text-amber-700 dark:text-amber-300">
								Access to this panel is restricted to authorized
								administrators only. If you need admin
								privileges for platform management, please
								contact us.
							</p>

							<div className="rounded-lg bg-amber-100/50 p-3 dark:bg-amber-900/20 space-y-2 border border-amber-200">
								<div className="flex items-center gap-2">
									<MailQuestionMark className="size-4 text-amber-600 dark:text-amber-400" />

									<span className="text-xs font-medium text-amber-800 dark:text-amber-200">
										Contact for Admin Access
									</span>
								</div>
								<p className="text-xs text-amber-700 dark:text-amber-300 ml-6">
									Email: yalok6321@gmail.com
								</p>
								<p className="text-xs text-amber-700 dark:text-amber-300 ml-6">
									Please include your username and reason for
									access request
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-muted/30 bg-muted/30 p-3">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div
									className={`h-2 w-2 rounded-full ${
										isAdmin
											? "bg-green-500"
											: "bg-slate-400"
									}`}
								/>
								<span className="text-xs font-medium text-muted-foreground">
									Current Status
								</span>
							</div>
							<span
								className={`text-xs font-medium ${
									isAdmin
										? "text-green-600 dark:text-green-400"
										: "text-slate-600 dark:text-slate-400"
								}`}
							>
								{isAdmin ? "Admin" : "Standard User"}
							</span>
						</div>
					</div>
					{isAdmin ? (
						<Link href="/admin" className="block">
							<Button
								size="default"
								className="w-full gap-2 bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
							>
								<BrickWallShield className="size-4 transition-transform group-hover:scale-110" />
								<span className="font-medium">
									Open Admin Dashboard
								</span>
								<Forward className="ml-auto size-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</Link>
					) : (
						<Button
							size="default"
							className="w-full gap-2 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
							onClick={() => router.push("/contact")}
						>
							<MailQuestionMark className="size-4 transition-transform group-hover:scale-110" />

							<span className="font-medium">
								Request Admin Access
							</span>
							<Forward className="ml-auto size-4 transition-transform group-hover:translate-x-1" />
						</Button>
					)}
				</div>
			</UserButton.UserProfilePage>
		</UserButton>
	);
}
