import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "BuildHub - Share Your Creations",
	description:
		"A platform for creators to showcase their work, get authentic feedback, and build together. No fake launches, no fake builders. Just real people, building real things.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${outfit.className} antialiased`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
