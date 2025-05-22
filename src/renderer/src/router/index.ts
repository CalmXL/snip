import { createHashRouter } from "react-router";
import Home from '@renderer/pages/home'
import Config from "@renderer/pages/config";
import Category from "@renderer/pages/category";
import ContentList from "@renderer/pages/ContentList";
import CategoryLoader from "@renderer/pages/category/CategoryLoader";
import ContentListLoader from "@renderer/pages/ContentList/ContentListLoader";
import Content from "@renderer/pages/Content";
import ContentLoader from "@renderer/pages/Content/ContentLoader";

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
            loader: ContentListLoader,
            Component: ContentList,
            children: [
              {
                path: 'content/:id',
                loader: ContentLoader,
                Component: Content
              }
            ]
          }
        ]

      }
    ]
  }
])

export default router;
