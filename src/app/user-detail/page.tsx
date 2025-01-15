import React from 'react'
import Link from 'next/link'

export default function Page() {
    const data: number[] = [1,2,3,4,5]
    return (
        <main className='flex flex-col gap-5 p-2'>
            <p className='font-bold text-5xl'>This is user detail page.</p>
            {
                data.map((id)=>(
                    <div key={id} className='text-blue-500'>
                        <Link href={`/user-detail/${id}`} className='text-blue-500'>
                            Details of user with id {id}
                        </Link>
                    </div>
                ))
            }
        </main>
    )
}