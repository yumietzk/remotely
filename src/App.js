import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Homepage from "./components/Homepage";
import SearchJobs from "./pages/SearchJobs";
import Blog from "./pages/Blog";

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
          <Route path="/" element={<Homepage />} />
          <Route path="search" element={<SearchJobs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="account" element={<p>User Account</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
