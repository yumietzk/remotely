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
import { useUser } from "./contexts/UserProvider";
import ProtectedRoute from "./routes/ProtectedRoute";

function AppRoutes() {
  const { user } = useUser();
  // console.log(user);

  // useEffect(() => {
  //   async function signOut() {
  //     const { error } = await supabase.auth.signOut();
  //   }
  //   signOut();
  // });

  /* ⚠️ Fix Route later */

  // if (!user)
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Toppage />} />
  //         <Route path="/signin" element={<SignIn />} />
  //         <Route path="/signup" element={<SignUp />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );

  // if (!user) return <Navigate

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
            {/* <Route path="/create" element={<CreatAccount />} /> */}
            {/* </Route> */}
            <Route path="/delete" element={<Dashboard />} />
          </Route>
          {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
        </Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
