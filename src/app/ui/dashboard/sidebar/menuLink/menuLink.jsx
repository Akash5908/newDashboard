"use client"

import Link from "next/link"
import styles from "./menuLink.module.css"
import { usePathname } from "next/navigation"

const MenuLink = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link href={item.path}>
      <div className='w-full'>
        <span className='mr-2'>{item.icon}</span>
        <span>{item.title}</span>
      </div>
    </Link>
  )
}

export default MenuLink
