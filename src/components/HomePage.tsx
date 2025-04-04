
import { ArrowRight, Clock, Palette, Download, Sparkles, FileText } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Use the Navbar here */}
			

			{/* Hero Section */}
			<div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center">
						<h1 className="text-5xl font-bold text-gray-900 mb-6">
							Create Your Professional Resume <br />
							<span className="text-blue-600">in Minutes</span>
						</h1>
						<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
							Build stunning, ATS-friendly resumes with our intuitive builder. Choose from professional templates and get hired faster.
						</p>
						<div className="flex justify-center gap-4">
							<button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
								Create Resume <ArrowRight className="w-4 h-4" />
							</button>
							<Link
								href="/templates"
								className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
							>
								View Templates
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-20 bg-gray-50" id="features">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">Why Choose SnapFolio?</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<FeatureCard
							icon={<Clock className="w-6 h-6 text-blue-600" />}
							title="Real-time Preview"
							description="See changes instantly as you type with our live preview feature"
						/>
						<FeatureCard
							icon={<Palette className="w-6 h-6 text-blue-600" />}
							title="Multiple Templates"
							description="Choose from professionally designed templates that stand out"
						/>
						<FeatureCard
							icon={<Download className="w-6 h-6 text-blue-600" />}
							title="Easy Export"
							description="Download your resume in PDF format with one click"
						/>
						<FeatureCard
							icon={<Sparkles className="w-6 h-6 text-blue-600" />}
							title="ATS-Friendly"
							description="Ensure your resume passes Applicant Tracking Systems"
						/>
						<FeatureCard
							icon={<FileText className="w-6 h-6 text-blue-600" />}
							title="Content Suggestions"
							description="Get AI-powered suggestions for better content"
						/>
						<FeatureCard
							icon={<ArrowRight className="w-6 h-6 text-blue-600" />}
							title="Easy to Use"
							description="Intuitive interface makes resume building a breeze"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
	return (
		<div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
			<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">{icon}</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

export default HomePage;
