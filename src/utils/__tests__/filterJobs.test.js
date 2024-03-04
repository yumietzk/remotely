// import { filterJobs } from "../filterJobs";

// // Mock the formatString function
// jest.mock("./formatString", () => ({
//   formatString: jest.fn(),
// }));

// describe("filterJobs function", () => {
//   const jobs = [
//     { job_type: "Full-time", tags: ["JavaScript", "React"] },
//     { job_type: "Part-time", tags: ["Node.js", "Express"] },
//     { job_type: "Remote", tags: ["Python", "Django"] },
//   ];

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should filter jobs by selected job type", () => {
//     const selectedJobType = ["Full-time"];
//     const selectedSkill = [];

//     // Mock formatString implementation
//     const mockFormatString = jest.fn((str) => str.toLowerCase());
//     mockFormatString.mockReturnValue("full-time");
//     jest.mock("./formatString", () => ({
//       formatString: mockFormatString,
//     }));

//     const filteredJobs = filterJobs(jobs, selectedJobType, selectedSkill);
//     expect(filteredJobs).toEqual([
//       { job_type: "Full-time", tags: ["JavaScript", "React"] },
//     ]);
//     expect(mockFormatString).toHaveBeenCalledTimes(1);
//     expect(mockFormatString).toHaveBeenCalledWith("Full-time");
//   });

//   it("should filter jobs by selected skill", () => {
//     const selectedJobType = [];
//     const selectedSkill = ["React"];

//     // Mock formatString implementation
//     const mockFormatString = jest.fn((str) => str.toLowerCase());
//     mockFormatString.mockReturnValue("react");
//     jest.mock("./formatString", () => ({
//       formatString: mockFormatString,
//     }));

//     const filteredJobs = filterJobs(jobs, selectedJobType, selectedSkill);
//     expect(filteredJobs).toEqual([
//       { job_type: "Full-time", tags: ["JavaScript", "React"] },
//     ]);
//     expect(mockFormatString).toHaveBeenCalledTimes(2);
//     expect(mockFormatString).toHaveBeenCalledWith("React");
//   });

// });
