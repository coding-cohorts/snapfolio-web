import React from 'react'
import Link from 'next/link'

export default function Page() {
    return (
        <main className='flex flex-col gap-5 p-2'>
            <p className='font-bold text-5xl'>This is user detail page.</p>
            <Link href={`/user-detail/1`} className='text-blue-500'>Visit "user1" detail</Link>
            <Link href={`/user-detail/2`} className='text-blue-500'>Visit "user2" detail</Link>
            <Link href={`/user-detail/3`} className='text-blue-500'>Visit "user3" detail</Link>
            <Link href={`/user-detail/4`} className='text-blue-500'>Visit "user4" detail</Link>
            <Link href={`/user-detail/5`} className='text-blue-500'>Visit "user5" detail</Link>
        </main>
    )
}