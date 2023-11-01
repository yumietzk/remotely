import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Homepage from "./components/Homepage";
import SearchJobs from "./pages/SearchJobs";
import News from "./pages/News";
import UserAccount from "./pages/UserAccount";
import CreatAccount from "./pages/CreatAccount";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function App() {
  // return (
  //   // grid-cols-[300px_1fr]
  //   <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary font-normal text-base text-black">
  //     <Header />
  //     <SubHeader>
  //       <SearchInput handleSearch={handleSearch} />
  //     </SubHeader>
  //     <Main
  //       jobs={jobs}
  //       searchTerm={searchTerm}
  //       handleResetSearch={handleResetSearch}
  //     />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* ⚠️ Fix Homepage later */}
          <Route path="/" element={<Homepage />} />
          <Route path="search" element={<SearchJobs />} />
          <Route path="news" element={<News />} />
          <Route path="account" element={<UserAccount />}>
            <Route path="create" element={<CreatAccount />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
