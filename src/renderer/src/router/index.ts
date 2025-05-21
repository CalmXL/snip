import { createHashRouter } from "react-router";
import Home from '@renderer/pages/home'
import Config from "@renderer/pages/config";
import Category from "@renderer/pages/category";
import ContentList from "@renderer/pages/ContentList";
import CategoryLoader from "@renderer/pages/category/CategoryLoader";

const router = createHashRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: 'config',
    Component: Config,
    children: [
      {
        path: 'category',
        Component: Category,
        loader: CategoryLoader,
        children: [
          {
            path: 'contentList/:cid',
            Component: ContentList
          }
        ]

      }
    ]
  }
])

export default router;
