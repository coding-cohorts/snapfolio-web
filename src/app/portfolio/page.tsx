import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <div className='flex flex-col gap-5'>
            <p className='font-bold text-5xl'>This is portfolio page.</p>
            <Link href={`/portfolio/user123`}>Visit "user123" portfolio</Link>
        </div>
    )
}
