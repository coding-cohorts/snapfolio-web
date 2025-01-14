import React from 'react'
import Link from 'next/link'

export default function page() {
    const data: number[] = [1,2,3,4,5]
    return (
        <main className='flex flex-col gap-5 p-2'>
            <p className='font-bold text-5xl'>This is portfolio page.</p>
            {
                data.map((id)=>(
                    <div key={id}>
                        <Link href={`/portfolio/${id}`} className='text-blue-500'>Portfolio of user with id {id}</Link>
                    </div>
                ))
            }
        </main>
    )
}