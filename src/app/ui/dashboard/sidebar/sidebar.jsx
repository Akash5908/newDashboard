import { menuItems } from "./menuLink/menuItems"
import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/MenuLink"

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className='h-full'>
        {menuItems.list.map((item, index) => (
          <li className='flex' key={index}>
            <p className='flex items-center'>
              <span className='mr-2'>{item.icon}</span>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
