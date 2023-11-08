import { CiLogout } from "react-icons/ci";

function UserModal({ onMouseLeave }) {
  return (
    <div
      className="bg-white border border-gray-100 rounded-md w-40 p-4 absolute top-10 -left-6 z-10 flex items-center"
      onMouseLeave={onMouseLeave}
    >
      <CiLogout />
      Sign out
    </div>
  );
}

export default UserModal;
