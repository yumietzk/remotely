import { Outlet } from "react-router-dom";

function UserAccount() {
  return (
    <div className="px-12 py-9 bg-background-primary row-span-2 flex justify-center items-center">
      Your profile here
      <Outlet />
    </div>
  );
}

export default UserAccount;
