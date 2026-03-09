"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { contactSubmissionsAction } from "@/lib/contact/contact-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { CheckCircle, Loader2Icon, SendHorizonal } from "lucide-react";
import { useActionState, useState } from "react";
import { FormField } from "../form/form-field";
import { Label } from "../ui/label";

const contactReasons = [
	{ value: "become_admin", label: "Want to become admin" },
	{ value: "feature_request", label: "Feature request" },
	{ value: "bug_report", label: "Bug report" },
	{ value: "partnership", label: "Partnership inquiry" },
	{ value: "other", label: "Other inquiry" },
];

const initialState: FormState = {
	success: false,
	errors: undefined,
	message: "",
};

export function ContactForm() {
	const [reason, setReason] = useState("");
	const [state, formAction, isPending] = useActionState(
		contactSubmissionsAction,
		initialState,
	);

	const { errors, message, success } = state;
	const getFieldErrors = (fieldName: string): string[] => {
		if (!errors) return [];
		return (errors as Record<string, string[]>)[fieldName] ?? [];
	};

	if (success) {
		return (
			<Card className="max-w-2xl mx-auto">
				<CardContent className="pt-6">
					<div className="text-center py-8">
						<CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
						<h3 className="text-2xl font-semibold mb-2">
							Thank You!
						</h3>
						<p className="text-muted-foreground">
							Your message has been sent successfully. We&apos;ll
							get back to you soon!
						</p>
						<Button
							onClick={() => window.location.reload()}
							className="mt-4"
						>
							Send Another Message
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<form action={formAction} className="space-y-6">
			{message && (
				<div
					className={cn(
						"p-4 rounded-lg border",
						success
							? "bg-primary/10 border-primary text-primary"
							: "bg-destructive/10 border-destructive text-destructive",
					)}
					role="alert"
					aria-live="polite"
				>
					{message}
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<FormField
					label="Name"
					name="name"
					id="name"
					placeholder="Your name"
					required
					onChange={() => {}}
					error={getFieldErrors("name")}
				/>
				<FormField
					label="Email"
					name="email"
					id="email"
					placeholder="your.email@example.com"
					required
					onChange={() => {}}
					error={getFieldErrors("email")}
				/>
			</div>

			<FormField
				label="Subject"
				name="subject"
				id="subject"
				placeholder="I need help with..."
				required
				helperText="Briefly describe your request"
				onChange={() => {}}
				error={getFieldErrors("subject")}
			/>
			<FormField
				label="Description"
				name="description"
				id="description"
				placeholder="Tell us what you need help with..."
				required
				helperText="Provide details about your request"
				onChange={() => {}}
				error={getFieldErrors("description")}
				textarea
			/>

			<input type="hidden" name="reason" value={reason} />

			<div className="flex flex-col gap-2">
				<Label htmlFor="reason">Reason for Contact</Label>

				<Select onValueChange={(value) => setReason(value)}>
					<SelectTrigger
						className={cn(
							"w-full",
							getFieldErrors("reason").length > 0 &&
								"border-destructive focus:ring-destructive",
						)}
					>
						<SelectValue placeholder="Select a reason" />
					</SelectTrigger>

					<SelectContent>
						<SelectGroup>
							<SelectLabel>Contact Reason</SelectLabel>

							{contactReasons.map((reason) => (
								<SelectItem
									key={reason.value}
									value={reason.value}
								>
									{reason.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>

				{getFieldErrors("reason").length > 0 && (
					<p className="text-sm text-destructive">
						{getFieldErrors("reason").join(", ")}
					</p>
				)}
			</div>

			<Button
				type="submit"
				size="lg"
				disabled={isPending}
				className="w-full"
			>
				{isPending ? (
					<Loader2Icon className="size-4 animate-spin" />
				) : (
					<>
						<SendHorizonal className="h-4 w-4 mr-2" />
						Send Message
					</>
				)}
			</Button>
		</form>
	);
}
