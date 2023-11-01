import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";

function UserIcon() {
  const navigate = useNavigate();

  return (
    <div className="flex-none py-9">
      <button
        className="flex justify-center items-center"
        onClick={() => navigate("/account")}
      >
        <CiUser className="text-white-primary font-normal w-8 h-8 p-1.5 border border-white-secondary rounded-full" />
      </button>
    </div>
  );
}

export default UserIcon;