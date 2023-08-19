import Form from "./Form";

function SubHeader() {
  return (
    <div className="bg-background-secondary text-white-primary px-40 py-12 w-full mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">
        Remote Software Engineer jobs available from Japan
      </h1>
      <p className="mb-3.5 text-xl">Search by positions.</p>

      <Form />
    </div>
  );
}

export default SubHeader;
