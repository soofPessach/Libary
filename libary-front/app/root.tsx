import { Links, Outlet } from "react-router";
import Layout from "./layout/layout";
import "./app.css";
import "@radix-ui/themes/styles.css";

// export function links() {
//   return [{ rel: "stylesheet", href: globalStyles }];
// }

export default function App() {
  return (
    <div>
      <Links />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
