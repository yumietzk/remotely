import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/elements/Loading";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import JobSearch from "./pages/JobSearch";
import News from "./pages/News";
import Profile from "./pages/Profile";
import ApplicationTracker from "./pages/ApplicationTracker";

const TopPage = lazy(() => import("./pages/TopPage"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AppLayout = lazy(() => import("./components/layout/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/application" element={<ApplicationTracker />} />
              <Route path="/search" element={<JobSearch />} />
              <Route path="/news" element={<News />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
