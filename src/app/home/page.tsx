"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			router.push("/home"); // Redirect to login if no token
		}
	}, []);

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
		</div>
	);
}
