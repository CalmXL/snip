import { createHashRouter } from "react-router";
import Home from '@renderer/pages/home'
import Config from "@renderer/pages/config";
import Category from "@renderer/pages/category";
import Content from "@renderer/pages/Content";
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
        path: '',
        Component: Category,
        loader: CategoryLoader,
        children: [
          {
            index: true,
            Component: Content
          }
        ]

      }
    ]
  }
])

export default router;
