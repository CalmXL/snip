export default async ({ request, params }) => {
  const { id } = params
  const data = await request.formData()
  const title = data.get('title')
  const content = data.get('content')
  const res = await window.api.sql(`update contents set title=@title, content=@content where id=@id`, 'update', {
    title,
    content,
    id
  })

  return res
}
