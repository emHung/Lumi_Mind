"use client";

import { useTheme } from "next-themes";

export default function ChatLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { theme } = useTheme();

	return (
		<div className={theme}>
			{children}
		</div>
	);
} 