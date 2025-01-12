"use client"
import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

interface PageProps {
  params: Promise<{ slug: string }>
}


export default function Page({ params }: PageProps) {
  const resolvedParams = use(params);
  const baseUrl = "http://localhost:8080/api/v1/user";

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${resolvedParams.slug}`);
      console.log("User data:", response.data);
    } catch (err) {
      console.log("Error fetching portfolio", err);
    }
  };

  useEffect(() => {
      fetchUser(); 
  }, []);

  return (
    <div className="p-2">
      <p className="font-bold text-3xl">Details of user {resolvedParams.slug}</p>
      <p> Check Console</p>
    </div>
  );
}
