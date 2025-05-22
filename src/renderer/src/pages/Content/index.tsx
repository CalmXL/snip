import { useLoaderData } from "react-router"
import './content.scss'

export default function Content() {

  const content = useLoaderData<ContentType>()

  return (
    <div className="content-page">
      <h1>{ content.title }</h1>
      <div className="content">{ content.content }</div>
    </div>
  )
}
