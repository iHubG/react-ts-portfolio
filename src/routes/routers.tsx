import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/layout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Education from "@/pages/Education";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <Skills /> },
      { path: "education", element: <Education /> },
    ],
  },
  {
    path: "*", 
    element: <NotFound />,
  },
]);

export default router;
