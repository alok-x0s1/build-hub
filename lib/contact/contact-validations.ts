import z from "zod";

export const contactSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters"),
	email: z.string().email("Please enter a valid email address"),
	subject: z.string().min(5, "Subject must be at least 5 characters"),
	description: z
		.string()
		.min(10, "Description must be at least 10 characters"),
	reason: z.string().min(1, "Please select a reason"),
});
