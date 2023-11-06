// import SearchInput from "./SearchInput";

function SubHeader({ children }) {
  return (
    <>
      {/* <h3 className="text-[12px] leading-normal font-bold mb-3.5">
        Remote Software Engineer jobs available from Japan
      </h3> */}
      <p className="text-lg mb-1">Search by positions.</p>

      <div className="flex">{children}</div>
    </>
  );
}

export default SubHeader;
