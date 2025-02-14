// Modern Template - Clean, with a sidebar
import { ResumeData } from "@/types/resume-data";
import { Mail, Phone, MapPin, Github } from "lucide-react";

export const ModernTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
	return (
		<div className="flex bg-white min-h-[1056px] w-[816px]">
			{/* Sidebar */}
			<div className="w-64 bg-gray-50 p-6 space-y-6">
				<div className="space-y-2">
					<h1 className="text-2xl font-bold text-gray-900">{data.personalInfo.name}</h1>
					<p className="text-blue-600 font-medium">{data.personalInfo.title}</p>
				</div>

				<div className="space-y-2 text-sm">
					<div className="flex items-center gap-2">
						<Mail size={14} />
						<span>{data.personalInfo.email}</span>
					</div>
					<div className="flex items-center gap-2">
						<Phone size={14} />
						<span>{data.personalInfo.phone}</span>
					</div>
					<div className="flex items-center gap-2">
						<MapPin size={14} />
						<span>{data.personalInfo.location}</span>
					</div>
					{data.personalInfo.github && (
						<div className="flex items-center gap-2">
							<Github size={14} />
							<span>{data.personalInfo.github}</span>
						</div>
					)}
				</div>

				<div>
					<h2 className="text-lg font-semibold mb-2">Skills</h2>
					<div className="flex flex-wrap gap-2">
						{data.skills.map((skill, index) => (
							<span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-6 space-y-6">
				{data.summary && (
					<div>
						<h2 className="text-lg font-semibold mb-2">Summary</h2>
						<p className="text-gray-700">{data.summary}</p>
					</div>
				)}

				<div>
					<h2 className="text-lg font-semibold mb-4">Experience</h2>
					<div className="space-y-4">
						{data.experience.map((exp, index) => (
							<div key={index}>
								<h3 className="font-medium">{exp.position}</h3>
								<p className="text-blue-600">{exp.company}</p>
								<p className="text-sm text-gray-600">{exp.duration}</p>
								<p className="mt-2 text-gray-700">{exp.description}</p>
							</div>
						))}
					</div>
				</div>

				<div>
					<h2 className="text-lg font-semibold mb-4">Education</h2>
					<div className="space-y-4">
						{data.education.map((edu, index) => (
							<div key={index}>
								<h3 className="font-medium">{edu.degree}</h3>
								<p className="text-blue-600">{edu.school}</p>
								<p className="text-sm text-gray-600">{edu.duration}</p>
								{edu.description && <p className="mt-2 text-gray-700">{edu.description}</p>}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
