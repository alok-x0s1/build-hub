"use server";

import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { FormState } from "@/types";
import { auth } from "@clerk/nextjs/server";
import z from "zod";
import { contactSchema } from "./contact-validations";

export const contactSubmissionsAction = async (
	prevState: FormState,
	formData: FormData,
) => {
	try {
		const { userId } = await auth();

		if (!userId) {
			return {
				success: false,
				message: "You must be signed in to submit a product",
				errors: undefined,
			};
		}

		const rawFormData = Object.fromEntries(formData.entries());

		const validatedData = contactSchema.safeParse(rawFormData);

		if (!validatedData.success) {
			console.log(validatedData.error.flatten().fieldErrors);
			return {
				success: false,
				errors: validatedData.error.flatten().fieldErrors,
				message: "Please check the form.",
			};
		}
		const { name, email, subject, description, reason } =
			validatedData.data;

		await db.insert(contactSubmissions).values({
			name,
			email,
			subject,
			description,
			reason,
			status: "pending",
			userId,
			createdAt: new Date(),
		});

		return {
			success: true,
			message:
				"Message submitted successfully! We'll get back to you soon.",
			errors: undefined,
		};
	} catch (error) {
		console.error(error);

		if (error instanceof z.ZodError) {
			return {
				success: false,
				errors: error.flatten().fieldErrors,
				message: "Validation failed. Please check the form.",
			};
		}

		return {
			success: false,
			errors: undefined,
			message: "Failed to submit message",
		};
	}
};
