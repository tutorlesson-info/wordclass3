import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import FlashPage from "../flash/FlashPage";
import site from "../flash/site.json";

// Flash 站的路由：一个页面对应 site.json 里的一页，路径由生成流程决定。
const routes: RouteObject[] = [
  ...site.pages.map((page) => ({
    path: page.path,
    element: <FlashPage page={page} />,
  })),
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
