import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import SearchJobs from "./pages/SearchJobs";
import News from "./pages/News";
import UserAccount from "./pages/UserAccount";
// import CreatAccount from "./pages/CreatAccount";
import Profile from "./pages/Profile";
import MyJobs from "./pages/MyJobs";
import Toppage from "./pages/Toppage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myJobs" element={<MyJobs />} />
            <Route path="/searchJobs" element={<SearchJobs />} />
            <Route path="/news" element={<News />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/delete" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<p>There's nothing here!! 😜</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
