import { Outlet, useLoaderData } from 'react-router'
import './category.scss'
import { Add, DatabaseSetting } from '@icon-park/react'

export default function Category() {
  const categories = useLoaderData<CategoryType[]>()

  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <span>{category.name}</span>
          </div>
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
