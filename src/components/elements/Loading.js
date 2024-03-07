import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="w-full h-full mt-3 flex justify-center items-center">
      <AiOutlineLoading3Quarters className="w-7 h-7 animate-spin" />
    </div>
  );
}

export default Loading;
