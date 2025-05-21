import { NavLink, Outlet, useLoaderData } from 'react-router'
import './category.scss'
import { Add, DatabaseSetting } from '@icon-park/react'

export default function Category() {
  const categories = useLoaderData<CategoryType[]>()

  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <NavLink
            className={({isActive}) => (isActive ? 'active' : '')}
            key={category.id}
            to={`/config/category/contentList/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="nav">
        <Add size="20" strokeWidth={2} />
        <DatabaseSetting size="20" strokeWidth={2} />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
