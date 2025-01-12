"use client"
import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

interface PageProps {
  params: Promise<{ slug: string }>
}

interface PortfolioItem {
  id: number;
  title: string;
  theme: string;
  about: string;
  workExperience: string;
  education: string;
  projects: string;
  skills: string;
}

export default function Page({ params }: PageProps) {
  const [result, setResult] = useState<PortfolioItem | null>(null);
  const resolvedParams = use(params);
  const baseUrl = "http://localhost:8080/api/v1/portfolio";

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${resolvedParams.slug}`);
      console.log("Portfolio data:", response.data);
      setResult(response.data);
    } catch (err) {
      console.log("Error fetching portfolio", err);
    }
  };

  useEffect(() => {
    if (resolvedParams.slug) {
      fetchPortfolio();
    }
  }, [resolvedParams.slug]);

  return (
    <div className="p-2">
      <p className="font-bold text-3xl">Portfolio of user {resolvedParams.slug}</p>
      {result ? (
        <div>
          <h2>{result.title}</h2>
          <p>{result.about}</p>
          <p><strong>Work Experience:</strong> {result.workExperience}</p>
          <p><strong>Education:</strong> {result.education}</p>
          <p><strong>Skills:</strong> {result.skills}</p>
          <p><strong>Projects:</strong> {result.projects}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
