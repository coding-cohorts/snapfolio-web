"use client";
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
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
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [error, setError] = useState<Error | null>(null);
  const resolvedParams = use(params);
  const baseUrl = "http://localhost:8080/api/v1/portfolio";

  const fetchPortfolio = async () => {
    setIsLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await axios.get(`${baseUrl}/${resolvedParams.slug}`);
      console.log("Portfolio data:", response.data);
      setResult(response.data);
    } catch (err) {
      console.error("Error fetching portfolio", err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (resolvedParams.slug) {
      fetchPortfolio();
    }
  }, [resolvedParams.slug]);

  return (
    <main className="p-2">
      <p className="font-bold text-3xl">Portfolio of user with id {resolvedParams.slug}</p>
      {isLoading && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
      {error && (
        <div className="text-red-500 p-4">
          <p>Error loading portfolio: {error.message}</p>
          <button
            onClick={() => fetchPortfolio()}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      )}
      {!isLoading && !error && result && (
        <div className='p-4'>
          <h2 className="text-xl">Portfolio Data (JSON format)</h2>
          <pre className="bg-gray-100 p-4 rounded-md">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}