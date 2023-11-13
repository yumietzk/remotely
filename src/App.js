import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./supabase";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import SearchJobs from "./pages/SearchJobs";
import News from "./pages/News";
import UserAccount from "./pages/UserAccount";
import CreatAccount from "./pages/CreatAccount";
import Profile from "./pages/Profile";
import MyJobs from "./pages/MyJobs";
import Toppage from "./pages/Toppage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }

    getUser();
  }, []);

  /* ⚠️ Fix Route later */

  if (!user)
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Toppage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myJobs" element={<MyJobs />} />
          <Route path="searchJobs" element={<SearchJobs />} />
          <Route path="news" element={<News />} />
          <Route path="account" element={<UserAccount />}>
            <Route path="create" element={<CreatAccount />} />
          </Route>
          <Route path="delete" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
