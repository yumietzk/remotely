import {
  CiPaperplane,
  CiMobile3,
  CiDesktop,
  CiFaceSmile,
  CiFaceFrown,
} from "react-icons/ci";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
import { useEffect } from "react";

const metrics = [
  { number: 10, status: "Applied" },
  { number: 3, status: "Phone Interview" },
  { number: 1, status: "Technical Interview" },
  { number: 1, status: "Offered" },
];

function renderIcon(text) {
  const className = "w-11 h-11 p-3 bg-accent text-white rounded-full";

  switch (text) {
    case "Applied": {
      return <CiPaperplane className={className} />;
    }

    case "Phone Interview": {
      return <CiMobile3 className={className} />;
    }

    case "Technical Interview": {
      return <CiDesktop className={className} />;
    }

    case "Offered": {
      return <CiFaceSmile className={className} />;
    }

    default: {
      return null;
    }
  }
}

function Dashboard() {
  const navigate = useNavigate();
  const { user, profileData } = useUser();

  // useEffect(() => {
  //   if (!user) navigate("/");
  // }, [user, navigate]);

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("You couldn't log out!");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-6">
      <div className="col-span-2 grid grid-cols-4 gap-4">
        {/* 💡 calling stage 1 or 2 might be also good */}
        {/* <div>07 Saved</div> */}

        {metrics.map((item, i) => {
          return (
            <div
              key={item.status}
              className="bg-white rounded-xl flex items-center justify-between py-4 px-5"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-medium">{item.number}</span>
                <span className="text-sm text-gray-200">{item.status}</span>
              </div>
              {renderIcon(item.status)}
            </div>
          );
        })}

        {/* <div>03 Declined</div> */}
        {/* CiFaceFrown */}
      </div>
      <div className="bg-white rounded-xl">Glaph</div>
      <div className="bg-white rounded-xl">
        Saved jobs from recent
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
}

export default Dashboard;
