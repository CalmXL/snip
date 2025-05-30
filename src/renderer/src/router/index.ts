import { createHashRouter } from "react-router";
import Home from '@renderer/pages/home'
import Config from "@renderer/pages/config";
import Category from "@renderer/pages/category";
import ContentList from "@renderer/pages/ContentList";
import CategoryLoader from "@renderer/pages/category/CategoryLoader";
import ContentListLoader from "@renderer/pages/ContentList/ContentListLoader";
import Content from "@renderer/pages/Content";
import ContentLoader from "@renderer/pages/Content/ContentLoader";
import ContentAction from "@renderer/pages/Content/ContentAction";
import Welcome from "@renderer/pages/Welcome";
import ContentListAction from "@renderer/pages/ContentList/ContentListAction";

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
            index: true,
            Component: Welcome
          },
          {
            path: 'contentList/:cid?',
            loader: ContentListLoader,
            action: ContentListAction,
            Component: ContentList,
            children: [
              {
                path: 'content/:id',
                loader: ContentLoader,
                action: ContentAction,
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
