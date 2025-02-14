
// Minimal Template - Clean, minimalist design
export const MinimalTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
	return (
		<div className="bg-white min-h-[1056px] w-[816px] p-8">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-4xl font-light text-gray-900">{data.personalInfo.name}</h1>
				<p className="text-xl text-gray-600 mt-1">{data.personalInfo.title}</p>

				<div className="flex gap-6 mt-4 text-sm text-gray-600">
					<a href={`mailto:${data.personalInfo.email}`} className="hover:text-gray-900">
						{data.personalInfo.email}
					</a>
					<span>{data.personalInfo.phone}</span>
					<span>{data.personalInfo.location}</span>
				</div>
			</div>

			{/* Content */}
			<div className="space-y-8">
				{data.summary && (
					<section>
						<p className="text-gray-700 leading-relaxed">{data.summary}</p>
					</section>
				)}

				<section>
					<h2 className="text-lg font-medium mb-4">Experience</h2>
					<div className="space-y-6">
						{data.experience.map((exp, index) => (
							<div key={index}>
								<h3 className="font-medium">{exp.position}</h3>
								<div className="text-gray-600 text-sm">
									{exp.company} • {exp.duration}
								</div>
								<p className="mt-2 text-gray-700 leading-relaxed">{exp.description}</p>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-lg font-medium mb-4">Education</h2>
					<div className="space-y-6">
						{data.education.map((edu, index) => (
							<div key={index}>
								<h3 className="font-medium">{edu.degree}</h3>
								<div className="text-gray-600 text-sm">
									{edu.school} • {edu.duration}
								</div>
								{edu.description && <p className="mt-2 text-gray-700 leading-relaxed">{edu.description}</p>}
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-lg font-medium mb-4">Skills</h2>
					<div className="flex flex-wrap gap-x-8 gap-y-2">
						{data.skills.map((skill, index) => (
							<span key={index} className="text-gray-700">
								{skill}
							</span>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};
