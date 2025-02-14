"use client";
import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import Image from "next/image";

// Template type definition
interface Template {
	id: string;
	name: string;
	description: string;
	thumbnail: string;
	tags: string[];
	popularity: number;
}

// Sample template data
const templates: Template[] = [
	{
		id: "modern-1",
		name: "Modern Professional",
		description: "Clean and contemporary design perfect for tech and creative roles",
		thumbnail: "https://placehold.co/300x400",
		tags: ["Modern", "Professional", "Tech", "Creative"],
		popularity: 95,
	},
	{
		id: "classic-1",
		name: "Classic Corporate",
		description: "Traditional layout ideal for corporate and executive positions",
		thumbnail: "https://placehold.co/300x400",
		tags: ["Classic", "Corporate", "Traditional", "Executive"],
		popularity: 88,
	},
	{
		id: "minimal-1",
		name: "Minimal Elegant",
		description: "Minimalist design suitable for any professional field",
		thumbnail: "https://placehold.co/300x400",
		tags: ["Minimal", "Clean", "Universal"],
		popularity: 92,
	},
	{
		id: "creative-1",
		name: "Creative Designer",
		description: "Stand out with this design-focused layout",
		thumbnail: "https://placehold.co/300x400",
		tags: ["Creative", "Design", "Modern", "Unique"],
		popularity: 85,
	},
	{
		id: "academic-1",
		name: "Academic CV",
		description: "Structured layout perfect for academic and research positions",
		thumbnail: "https://placehold.co/300x400",
		tags: ["Academic", "Research", "Traditional"],
		popularity: 78,
	},
];

// All unique tags from templates
const allTags = Array.from(new Set(templates.flatMap((template) => template.tags)));

const TemplateGallery = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<"popularity" | "name">("popularity");

	// Filter templates based on search query and selected tags
	const filteredTemplates = templates
		.filter((template) => {
			const matchesSearch =
				template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				template.description.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => template.tags.includes(tag));
			return matchesSearch && matchesTags;
		})
		.sort((a, b) => {
			if (sortBy === "popularity") {
				return b.popularity - a.popularity;
			}
			return a.name.localeCompare(b.name);
		});

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
	};

	return (
		<div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12 pt-20">
					<h1 className="text-5xl font-bold text-gray-900 mb-6">
						Professional Resume Templates
						<br />
						<span className="text-blue-600">For Every Career Path</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Choose from our collection of professionally designed templates and customize them to match your personal style
					</p>
				</div>

				{/* Search and Filters */}
				<div className="mb-12 space-y-6">
					{/* Search Bar */}
					<div className="relative max-w-md mx-auto">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
						<input
							type="text"
							placeholder="Search templates..."
							className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>

					{/* Tags and Sort */}
					<div className="flex flex-wrap items-center gap-4 justify-center">
						<div className="flex items-center gap-2 flex-wrap justify-center">
							<Filter size={20} className="text-blue-600" />
							{allTags.map((tag) => (
								<button
									key={tag}
									onClick={() => toggleTag(tag)}
									className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
										selectedTags.includes(tag)
											? "bg-blue-600 text-white"
											: "bg-white text-gray-700 border border-gray-300 hover:border-blue-500"
									}`}
								>
									{tag}
								</button>
							))}
						</div>
						<select
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value as "popularity" | "name")}
							className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
						>
							<option value="popularity">Most Popular</option>
							<option value="name">Name</option>
						</select>
					</div>
				</div>

				{/* Template Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredTemplates.map((template) => (
						<div key={template.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
							<div className="relative group">
								<Image
									src={template.thumbnail}
									alt={template.name}
									className="w-full h-[400px] object-cover"
									width={300}
									height={400}
								/>
								<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
									<button className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-700">
										Use This Template
									</button>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{template.name}</h3>
								<p className="text-gray-600 mb-4">{template.description}</p>
								<div className="flex flex-wrap gap-2">
									{template.tags.map((tag) => (
										<span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-lg font-medium">
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TemplateGallery;
