"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function LoginPage() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log("Login attempt with:", formData);
	};

	return (
		<div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				{/* Logo */}
				<div className="flex justify-center items-center mb-6">
					<FileText className="h-12 w-12 text-blue-600" />
					<span className="ml-2 text-2xl font-bold">SnapFolio</span>
				</div>
				<h2 className="text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Or{" "}
					<Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
						create a new account
					</Link>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-gray-200">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="username" className="block text-sm font-medium text-gray-700">
								Username or Email
							</label>
							<div className="mt-1">
								<input
									id="username"
									name="username"
									type="text"
									autoComplete="username"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									value={formData.username}
									onChange={(e) => setFormData({ ...formData, username: e.target.value })}
								/>
							</div>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">
								Password
							</label>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
									Forgot your password?
								</Link>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
