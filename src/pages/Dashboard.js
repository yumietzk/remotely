import { useNavigate } from "react-router-dom";
import {
  CiPaperplane,
  CiMobile3,
  CiDesktop,
  CiFaceSmile,
} from "react-icons/ci";
import { supabase } from "../services/supabase";
import ApplicationChart from "../features/dashboard/ApplicationChart";
import SavedJobs from "../features/dashboard/SavedJobs";

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

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("You couldn't log out!");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="flex-1 grid grid-rows-[min-content_1fr] grid-cols-2 gap-6">
      <div className="col-span-2 grid grid-cols-4 gap-6">
        {/* 💡 calling stage 1 or 2 might be also good */}

        {metrics.map((item, i) => {
          return (
            <div
              key={item.status}
              className="bg-white rounded-xl flex items-center justify-between p-6"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-medium">{item.number}</span>
                <span className="text-sm text-gray-200">{item.status}</span>
              </div>
              {renderIcon(item.status)}
            </div>
          );
        })}
      </div>

      <ApplicationChart />
      <SavedJobs />
    </div>
  );
}

export default Dashboard;
