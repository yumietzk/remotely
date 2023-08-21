import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";

function App() {
  return (
    // grid-cols-[300px_1fr]
    <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary font-normal text-base text-black">
      <Header />
      <SubHeader />
      <Main />
    </div>
  );
}

export default App;
