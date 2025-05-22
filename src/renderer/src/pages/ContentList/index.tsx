import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router'
import { useEffect } from 'react'
import './contentList.scss'
import dayjs from 'dayjs'

export default function Content() {

  const contents = useLoaderData<ContentType[]>()
  const navigate = useNavigate()
  useEffect( () => {
    if (contents.length) {
      navigate(`/config/category/contentList/${contents[0].category_id}/content/${contents[0].id}`)
    }
  }, [contents])

  return (
    <main className="content-list-page">
      <div className="list">{
        contents.map(content => (
          <NavLink
            key={content.id}
            to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
          >
            <div className='truncate'>{ content.title }</div>
            <div className='text-[11px] opacity-80'>{ dayjs(content.created_at).format('YYYY/MM/DD') }</div>
          </NavLink>
        ))
      }</div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
