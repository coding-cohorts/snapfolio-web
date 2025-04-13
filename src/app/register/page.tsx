"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FileText, ArrowRight, ArrowLeft, Check } from "lucide-react";
import Image from "next/image";
import axios from 'axios';

type Step = 1 | 2 | 3;

export default function RegisterPage() {
	const BASE_URL = "http://localhost:8080"
	const [currentStep, setCurrentStep] = useState<Step>(1);
	const [formData, setFormData] = useState({
		fullName: "",
		userName: "",
		email: "",
		profession: "",
		experience: "",
		password: "",
		confirmPassword: "",
	});

	const updateFormData = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
	const handleSubmit = async(e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		if (currentStep < 3) {
			setCurrentStep((prev) => (prev + 1) as Step);
			return;
		}
		// Validate password match
	    if (formData.password !== formData.confirmPassword) {
	        setError("Passwords don't match");
			return;
		}
		try{
			console.log("Registration data:", formData);
			const sendingData = {
				password: formData.password,
				username: formData.userName,
				email: formData.email,
			};
			console.log("Sending data ",sendingData)
			const response = await axios.post(`${BASE_URL}/auth/signup`,sendingData)
			setSuccess(true);
			console.log("Response ",response.data)
		}
		catch(err){
			console.log("Error in user registration ",err)
			setError("Registration failed. Please try again.")
		}
	}

	const handleGoogleSignIn = () => {
		// Implement Google Sign In
		console.log("Google Sign In");
	};

	const handleGithubSignIn = () => {
		// Implement GitHub Sign In
		console.log("GitHub Sign In");
	};

	const steps = [
		{ number: 1, title: "Personal Info" },
		{ number: 2, title: "Professional Info" },
		{ number: 3, title: "Account Setup" },
	];

	return (
		<div className="min-h-screen flex">
			{/* Left Side - Hero Section */}
			<div className="hidden lg:flex lg:w-1/2 bg-blue-50 flex-col justify-between p-12">
				<div className="flex items-center gap-2">
					<FileText className="h-8 w-8 text-blue-600" />
					<span className="text-xl font-bold">SnapFolio</span>
				</div>
				<div className="space-y-6">
					<h1 className="text-4xl font-bold text-gray-900">
						Create Your Professional <br />
						<span className="text-blue-600">Resume in Minutes</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-md">
						Join thousands of professionals who trust SnapFolio to build their career success story.
					</p>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
								<Check className="w-5 h-5 text-blue-600" />
							</div>
							<span className="text-gray-700">Professional templates</span>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
								<Check className="w-5 h-5 text-blue-600" />
							</div>
							<span className="text-gray-700">Easy customization</span>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
								<Check className="w-5 h-5 text-blue-600" />
							</div>
							<span className="text-gray-700">ATS-friendly formats</span>
						</div>
					</div>
				</div>
			</div>

			{/* Right Side - Form Section */}
			<div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 py-12 bg-white">
				<div className="max-w-md mx-auto w-full">
					{/* Header */}
					<h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Create Account</h2>
					<p className="text-gray-600 mb-8 text-center">
						{currentStep === 1 && "Let's get started with your personal details"}
						{currentStep === 2 && "Tell us about your professional background"}
						{currentStep === 3 && "Set up your account credentials"}
					</p>

					{/* Progress Steps */}
					<div className="flex justify-between mb-8">
						{steps.map((step) => (
							<div key={step.number} className="flex flex-col items-center">
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
										currentStep >= step.number ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"
									}`}
								>
									{currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
								</div>
								<span className="text-xs mt-1 text-gray-500">{step.title}</span>
							</div>
						))}
					</div>

					{/* Social Login - Only show on first step */}
					{currentStep === 1 && (
						<>
							<div className="grid grid-cols-2 gap-3 mb-6">
								<button
									onClick={handleGoogleSignIn}
									type="button"
									className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
								>
									<Image src="/icons/google.svg" alt="Google" width={20} height={20} />
									<span className="text-gray-700 font-medium">Google</span>
								</button>
								<button
									onClick={handleGithubSignIn}
									type="button"
									className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
								>
									<Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
									<span className="text-gray-700 font-medium">GitHub</span>
								</button>
							</div>

							<div className="relative my-6">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-200" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">or continue with email</span>
								</div>
							</div>
						</>
					)}

					{/* Form Steps */}
					{!success && <form onSubmit={handleSubmit} className="space-y-6">
						{currentStep === 1 && (
							<div className="space-y-6">
								<h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
								<div>
									<label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
										Full Name
									</label>
									<input
										type="text"
										id="fullName"
										required
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										value={formData.fullName}
										onChange={(e) => updateFormData("fullName", e.target.value)}
									/>
								</div>
								<div>
									<label htmlFor="userName" className="block text-sm font-medium text-gray-700">
										User Name
									</label>
									<input
										type="text"
										id="userName"
										required
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										value={formData.userName}
										onChange={(e) => updateFormData("userName", e.target.value)}
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">
										Email
									</label>
									<input
										type="email"
										id="email"
										required
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										value={formData.email}
										onChange={(e) => updateFormData("email", e.target.value)}
									/>
								</div>
							</div>
						)}

						{currentStep === 2 && (
							<div className="space-y-6">
								<h2 className="text-2xl font-bold text-gray-900">Professional Information</h2>
								<div>
									<label htmlFor="profession" className="block text-sm font-medium text-gray-700">
										Current Profession
									</label>
									<input
										type="text"
										id="profession"
										required
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										value={formData.profession}
										onChange={(e) => updateFormData("profession", e.target.value)}
									/>
								</div>
								<div>
									<label htmlFor="experience" className="block text-sm font-medium text-gray-700">
										Years of Experience
									</label>
									<input
										type="text"
										id="experience"
										required
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										value={formData.experience}
										onChange={(e) => updateFormData("experience", e.target.value)}
									/>
								</div>
							</div>
						)}

						{currentStep === 3 && (
							<div className="space-y-6">
								<h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
								<div>
									<label htmlFor="password" className="block text-sm font-medium text-gray-700">
										Password
									</label>
									<input
										type="password"
										id="password"
										required
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										value={formData.password}
										onChange={(e) => updateFormData("password", e.target.value)}
									/>
								</div>
								<div>
									<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
										Confirm Password
									</label>
									<input
										type="password"
										id="confirmPassword"
										required
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										value={formData.confirmPassword}
										onChange={(e) => updateFormData("confirmPassword", e.target.value)}
									/>
								</div>
							</div>
						)}

						{/* Navigation Buttons */}
						<div className="flex gap-3 pt-6">
							{currentStep > 1 && (
								<button
									type="button"
									onClick={() => setCurrentStep((prev) => (prev - 1) as Step)}
									className="flex-1 flex justify-center items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
								>
									<ArrowLeft className="w-4 h-4" /> Back
								</button>
							)}
							<button
								type="submit"
								className="flex-1 flex justify-center items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
							>
								{currentStep === 3 ? "Complete" : "Continue"} {currentStep < 3 && <ArrowRight className="w-4 h-4" />}
							</button>
						</div>
					</form>}

					{error && <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">{error}</div>}
                    {success && <div className="p-3 text-sm text-green-500 bg-green-50 rounded-md">Registration successful! You can now login.</div>}

					{/* Sign In Link */}
					<p className="mt-8 text-center text-sm text-gray-600">
						Already have an account?{" "}
						<Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
