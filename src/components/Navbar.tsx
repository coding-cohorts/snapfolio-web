"use client";
import { useState } from 'react';
import { FileText } from "lucide-react";
import Link from "next/link";


const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<nav
			className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo Section */}
					<Link
						href="/">
						<div className="flex items-center" role="banner">
							<FileText className="h-8 w-8 text-blue-600" />
							<span className="ml-2 text-xl font-bold">SnapFolio</span>
						</div>
					</Link>

					{/* Desktop Navigation Links */}
					<div className="hidden sm:flex items-center gap-6">
						<a href="#features" className="text-gray-600 hover:text-gray-900" role="menubar"
							tabIndex={0}>
							Features
						</a>
						<Link
							href="/templates"
							className="block py-2 text-gray-600 hover:text-gray-900" role="menuitem"
							tabIndex={0}>
							Templates
						</Link>

						<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap" role="menuitem"
							tabIndex={0}>
							Get Started
						</button>
						<Link href="/login">
  						<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"role="menuitem"
						tabIndex={0}>
    						Login
  						</button>
						</Link>
					</div>
					{/*Mobile menu button*/}
					<button
						className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle mobile menu"
					>

						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
					{isMobileMenuOpen && (
						<div
							className="sm:hidden absolute top-16 left-0 right-0 bg-white border-b"
							role="menu"
							onKeyDown={(e) => {
								if (e.key === 'Escape') {
									setIsMobileMenuOpen(false);
								}
							}}
						>
							<div className="px-4 py-2">
								<a href="#features" className="block py-2 text-gray-600 hover:text-gray-900" role="menubar">
									Features
								</a>
								<Link href="/templates" className="block py-2 text-gray-600 hover:text-gray-900">
									Templates
								</Link>
								<button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
									Get Started
								</button>
								
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
