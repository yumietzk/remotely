import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import SearchJobs from "./pages/SearchJobs";
import News from "./pages/News";
import UserAccount from "./pages/UserAccount";
import CreatAccount from "./pages/CreatAccount";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import Profile from "./pages/Profile";
import MyJobs from "./pages/MyJobs";
import Toppage from "./pages/Toppage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  // const [session, setSession] = useState(null);
  // console.log(session);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);

  /* ⚠️ Fix Route later */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<AppLayout />}>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myJobs" element={<MyJobs />} />
          <Route path="searchJobs" element={<SearchJobs />} />
          <Route path="news" element={<News />} />
          <Route path="account" element={<UserAccount />}>
            <Route path="create" element={<CreatAccount />} />
          </Route>
          <Route path="delete" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
