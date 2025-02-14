export interface ResumeData {
	personalInfo: {
		name: string;
		title: string;
		email: string;
		phone: string;
		location: string;
		website?: string;
		linkedin?: string;
		github?: string;
	};
	summary?: string;
	experience: Array<{
		company: string;
		position: string;
		duration: string;
		description: string;
	}>;
	education: Array<{
		school: string;
		degree: string;
		duration: string;
		description?: string;
	}>;
	skills: string[];
}
