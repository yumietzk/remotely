import { CiCircleRemove } from "react-icons/ci";
import Button from "../../components/elements/Button";

function Modal({ title, setShowModal, children, width = "220px" }) {
  return (
    <div
      className={`w-[${width}] absolute top-1 right-1 z-10 bg-white border border-gray-50 rounded-xl shadow-md py-4 px-5`}
    >
      <div className="flex items-center justify-between mb-6">
        <p className="mr-9 font-medium">{title}</p>
        <Button
          classes="rounded-full focus:ring-offset-green-100"
          handleClick={() => setShowModal(false)}
        >
          <CiCircleRemove className="w-6 h-6" />
        </Button>
      </div>

      {children}
    </div>
  );
}

export default Modal;
