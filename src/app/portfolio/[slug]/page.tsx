import React from 'react'

interface PageProps {
    params: {
      slug: string;
    };
}

export default function page({params}:PageProps) {
    const {slug} = params;
    return (
        <div>
            <p className='font-bold text-3xl'>Portfolio of user {slug}</p>
        </div>
    )
}
