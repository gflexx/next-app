import Link from 'next/link'
import React from 'react'

function NavbarMain() {
  return (
    <div>
        <nav className="p-4 border-b border-t rounded-2xl mb-12 font-bold flex justify-between">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
          <ul className="flex gap-8">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavbarMain