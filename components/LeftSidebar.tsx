import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href="/">
                <Image />
            </Link>
        </nav>
    </section>
  )
}

export default LeftSidebar