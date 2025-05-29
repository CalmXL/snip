import { NavLink, Outlet, useLoaderData, } from 'react-router'
import './category.scss'
import { Add, AllApplication, DatabaseSetting, FolderClose } from '@icon-park/react'

export default function Category() {
  const categories = useLoaderData<CategoryType[]>()

  return (
    <main className="category-page">
      <div className="categories">
        <NavLink
          to={`/config/category/contentList`}
          end
          className='font-bold'
        >
          <div className='flex items-center gap-2'>
            <AllApplication theme='outline' size='12' strokeWidth={3} />
            <div className='truncate'>全部片段</div>
          </div>
        </NavLink>
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            key={category.id}
            to={`/config/category/contentList/${category.id}`}
          >
            <div className='flex items-center gap-2'>
              <FolderClose theme='outline' size='12' strokeWidth={3} />
              {category.name}
            </div>
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
