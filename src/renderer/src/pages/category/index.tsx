import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router'
import './category.scss'
import { Add, DatabaseSetting, FolderClose } from '@icon-park/react'
import { useEffect } from 'react'

export default function Category() {
  const categories = useLoaderData<CategoryType[]>()

  const navigate = useNavigate()

  useEffect(() => {
    if (categories.length) {
      navigate(`/config/category/contentList/${categories[0].id}`)
    }
  }, [categories])

  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <NavLink
            className={({isActive}) => (isActive ? 'active' : '')}
            key={category.id}
            to={`/config/category/contentList/${category.id}`}
          >
            <div className='flex items-center gap-2'>
              <FolderClose theme='outline' size='12' strokeWidth={3}/>
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
