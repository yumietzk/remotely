import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import UserModal from "./UserModal";

function UserIcon() {
  const [isShown, setIsShown] = useState(false);

  console.log(isShown);

  const navigate = useNavigate();

  return (
    <div className="">
      <div
        className="flex-none mr-5 relative"
        onMouseEnter={() => setIsShown(true)}
      >
        <button
          className="flex justify-center items-center"
          // onClick={() => navigate("/account")}
        >
          <CiUser className="text-white-primary font-normal w-8 h-8 border border-white-secondary rounded-full" />
        </button>
        {/* ⚠️ Figure out mouse leave later */}
        {isShown && <UserModal onMouseLeave={() => setIsShown(false)} />}
      </div>
    </div>
  );
}

export default UserIcon;
