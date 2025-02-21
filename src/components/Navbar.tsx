import { FileText } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo Section */}
					<div className="flex items-center">
						<FileText className="h-8 w-8 text-blue-600" />
						<span className="ml-2 text-xl font-bold">SnapFolio</span>
					</div>

					{/* Desktop Navigation Links */}
					<div className="hidden sm:flex items-center gap-6">
						<a href="#features" className="text-gray-600 hover:text-gray-900">
							Features
						</a>
						<a href="#templates" className="text-gray-600 hover:text-gray-900">
							Templates
						</a>
						<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
							Get Started
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button className="sm:hidden p-2 rounded-lg hover:bg-gray-100">
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
