'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Home', href: '/'},
        { label: 'Add a new task', href: "/tasks/new"}
    ]


  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-center'>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link
                    key={link.href}
                    href={link.href}
                    className={classNames({
                        'underline' : link.href === currentPath,
                        'text-zinc-50' : link.href !== currentPath,
                        'hover:text-zinc-500 transition-colors' : true
                    })}>
                    {link.label}
                </Link>)}
        </ul>
    </nav>
  )
}

export default Navbar
