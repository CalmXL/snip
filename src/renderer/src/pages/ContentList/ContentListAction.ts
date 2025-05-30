import { redirect } from "react-router"

export default async ({ request, params }) => {
  const formData = await request.formData()
  const cid = params.cid || 0
  const action = formData.get('action')
  switch (action) {
    case "add":
      const id = await window.api.sql(`insert into contents (title, content, category_id, created_at) values('未命名片段', '', ${cid}, datetime())`, 'insert')
      return redirect(`/config/category/contentList/${cid}/content/${id}`)
  }
  return {}
}
