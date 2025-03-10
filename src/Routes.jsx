import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EditPost from "./Pages/Edit Post/EditPost";
import NewPost from "./Pages/newpost/NewPost";
import Homepage from "./Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "edit/:id", element: <EditPost /> }, 
      { path: "new-post", element: <NewPost /> },
    ],
  },
]);

export default router;
