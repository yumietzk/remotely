import Form from "./Form";

function SubHeader() {
  return (
    <div className="bg-background-secondary text-white-primary px-40 py-12 w-full mx-auto text-center">
      <h1 className="text-[38px] leading-normal font-bold mb-3.5">
        Remote Software Engineer jobs available from Japan
      </h1>
      <p className="mb-4 text-xl">Search by positions.</p>

      <Form />
    </div>
  );
}

export default SubHeader;
