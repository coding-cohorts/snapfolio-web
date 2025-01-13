import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <div className='flex flex-col gap-5 p-2'>
            <p className='font-bold text-5xl'>This is portfolio page.</p>
            <Link href={`/portfolio/1`} className='text-blue-500'>Visit "user1" portfolio</Link>
            <Link href={`/portfolio/2`} className='text-blue-500'>Visit "user2" portfolio</Link>
            <Link href={`/portfolio/3`} className='text-blue-500'>Visit "user3" portfolio</Link>
            <Link href={`/portfolio/4`} className='text-blue-500'>Visit "user4" portfolio</Link>
            <Link href={`/portfolio/5`} className='text-blue-500'>Visit "user5" portfolio</Link>
        </div>
    )
}
