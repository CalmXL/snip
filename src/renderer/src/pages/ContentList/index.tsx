import { Form, NavLink, Outlet, useLoaderData, useSubmit } from 'react-router'
import './contentList.scss'
import dayjs from 'dayjs'
import { Add } from '@icon-park/react'

export default function Content() {
  const contents = useLoaderData<ContentType[]>()
  const submit = useSubmit()

  return (
    <main className="content-list-page">
      <div className="list">
        <Form>
          <div className="flex items-center justify-between p-2 border-b">
            <input
              name="searchWord"
              type="text"
              placeholder="搜索..."
              className="outline-none  w-full"
            />
            <Add
              className="cursor-pointer"
              theme="outline"
              size="22"
              fill="#000000"
              strokeWidth={2}
              onClick={() => {
                submit({ action: 'add' }, { method: 'POST' })
              }}
            />
          </div>
        </Form>
        {contents.map((content) => (
          <NavLink
            key={content.id}
            to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
          >
            <div className="truncate">{content.title}</div>
            <div className="text-[11px] opacity-80">
              {dayjs(content.created_at).format('YYYY/MM/DD')}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
