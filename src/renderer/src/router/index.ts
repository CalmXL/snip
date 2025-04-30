import { createHashRouter } from "react-router";
import Home from '@renderer/pages/home'
import Config from "@renderer/pages/Config";

const router = createHashRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: 'config',
    Component: Config
  }
])

export default router;
