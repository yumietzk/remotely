import { data } from "../data/testTrackingJobs";

function ApplicationTracker() {
  return (
    <div className="grid grid-cols-kanban-board space-x-5 overflow-scroll">
      <div className="">
        <header className="mb-6 flex items-center">
          <h3 className="text-lg mr-2">No Status</h3>
          <p className="bg-gray-200 w-8 h-8 rounded-full text-white flex items-center justify-center">
            5
          </p>
          {/* add button */}
        </header>

        <div className="flex flex-col space-y-6">
          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>

          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>

          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>

          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>

          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>

          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <header className="mb-6 flex items-center">
          <h3 className="text-lg mr-2">Applied</h3>
          <p className="bg-gray-200 w-8 h-8 rounded-full text-white flex items-center justify-center">
            1
          </p>
          {/* add button */}
        </header>

        <div className="flex flex-col space-y-6">
          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>

          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>

          <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
              <div>
                <h4 className="text-lg">{data.title}</h4>
                <p className="text-sm text-gray-200">{data.company_name}</p>
              </div>

              <img
                className="self-end w-9 h-9 rounded-full"
                src={data.company_logo}
                alt="Company logo"
              />
            </div>

            <button className="bg-green-400 text-white w-full rounded-b-md py-1.5 text-sm hover:bg-green-500">
              Details
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3>Phone Interview</h3>
      </div>

      <div>
        <h3>Take Home Assignment</h3>
      </div>

      <div>
        <h3>Technical Interview</h3>
      </div>

      <div>
        <h3>Offered</h3>
      </div>
    </div>
  );
}

export default ApplicationTracker;
