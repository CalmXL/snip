import { Form, useLoaderData, useSubmit } from "react-router"
import './content.scss'

export default function Content() {
  const submit = useSubmit()
  const content = useLoaderData<ContentType>()

  return (
    <Form method="PUT">
      <main className="content-page">
        <input
          name="title"
          autoFocus
          value={content.title}
          onChange={(e) => {
            submit(e.target.form)
          }} />
        <textarea name="content" className="content" value={content.content} onChange={(e) => { submit(e.target.form) }} />
        <div className="border-t flex items-center justify-center mt-3">
          {/* <button>保存</button> */}
          {/* <Button type="default" onSubmit={}>保存</Button> */}
        </div>
      </main>
    </Form>
  )
}
