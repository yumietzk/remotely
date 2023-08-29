// import SearchInput from "./SearchInput";

function SubHeader({ children }) {
  return (
    <div className="border-t-[0.3px] border-white-secondary bg-background-secondary text-white-primary px-40 py-12 w-full mx-auto text-center">
      <h1 className="text-[38px] leading-normal font-bold mb-3.5">
        Remote Software Engineer jobs available from Japan
      </h1>
      <p className="mb-4 text-xl">Search by positions.</p>

      {/* {children} */}
    </div>
  );
}

export default SubHeader;
