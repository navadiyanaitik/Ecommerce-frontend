import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Public, RequireAdmin, RequireAuth, routes } from "./routes/index.js";
import PageNotFound from "./pages/404/index.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            let Wrapper;
            if (route.isProtected && !route.adminRoute) {
              Wrapper = RequireAuth;
            } else if (route.isProtected && route.adminRoute) {
              Wrapper = RequireAdmin;
            } else {
              Wrapper = Public;
            }
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Wrapper>
                    <Component key={index} />
                  </Wrapper>
                }
              />
            );
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
