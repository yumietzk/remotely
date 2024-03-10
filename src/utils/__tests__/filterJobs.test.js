import { filterJobs } from "../filterJobs";
import * as formatString from "../formatString";

// Mock function
const mockFormatString = jest.spyOn(formatString, "formatString");

afterEach(() => {
  jest.clearAllMocks();
});

describe("filterJobs function", () => {
  const jobs = [
    { job_type: "full_time", tags: ["javascript", "react"] },
    { job_type: "part_time", tags: ["node.js", "express", "javascript"] },
    { job_type: "contract", tags: ["data science"] },
  ];

  test("should filter jobs by selected job type correctly", () => {
    const selectedJobType = ["Part time"];
    const selectedSkill = [];

    // Configure mockGetNumberFromString to return the correct value
    mockFormatString.mockReturnValueOnce("parttime");
    mockFormatString.mockReturnValueOnce("fulltime");
    mockFormatString.mockReturnValueOnce("parttime");
    mockFormatString.mockReturnValueOnce("contract");

    const result = filterJobs(jobs, selectedJobType, selectedSkill);

    expect(result).toEqual([
      { job_type: "part_time", tags: ["node.js", "express", "javascript"] },
    ]);
    expect(mockFormatString).toHaveBeenCalledTimes(4);
    expect(mockFormatString).toHaveBeenCalledWith("Part time");
    expect(mockFormatString).toHaveBeenCalledWith("full_time");
    expect(mockFormatString).toHaveBeenCalledWith("part_time");
    expect(mockFormatString).toHaveBeenCalledWith("contract");
  });

  test("should filter jobs by selected skill correctly", () => {
    const selectedJobType = [];
    const selectedSkill = ["React"];

    // Configure mockGetNumberFromString to return the correct value
    mockFormatString.mockReturnValueOnce("react");
    mockFormatString.mockReturnValueOnce("javascript");
    mockFormatString.mockReturnValueOnce("react");
    mockFormatString.mockReturnValueOnce("node.js");
    mockFormatString.mockReturnValueOnce("express");
    mockFormatString.mockReturnValueOnce("javascript");
    mockFormatString.mockReturnValueOnce("datascience");

    const result = filterJobs(jobs, selectedJobType, selectedSkill);

    expect(result).toEqual([
      { job_type: "full_time", tags: ["javascript", "react"] },
    ]);
    expect(mockFormatString).toHaveBeenCalledTimes(7);
    expect(mockFormatString).toHaveBeenCalledWith("React");
    expect(mockFormatString).toHaveBeenCalledWith("javascript");
    expect(mockFormatString).toHaveBeenCalledWith("react");
    expect(mockFormatString).toHaveBeenCalledWith("node.js");
    expect(mockFormatString).toHaveBeenCalledWith("express");
    expect(mockFormatString).toHaveBeenCalledWith("data science");
  });

  test("should return an empty array when there's no match", () => {
    const selectedJobType = ["Internship"];
    const selectedSkill = [];

    // Configure mockGetNumberFromString to return the correct value
    mockFormatString.mockReturnValueOnce("internship");
    mockFormatString.mockReturnValueOnce("fulltime");
    mockFormatString.mockReturnValueOnce("parttime");
    mockFormatString.mockReturnValueOnce("contract");

    const result = filterJobs(jobs, selectedJobType, selectedSkill);

    expect(result).toEqual([]);
    expect(mockFormatString).toHaveBeenCalledTimes(4);
    expect(mockFormatString).toHaveBeenCalledWith("Internship");
    expect(mockFormatString).toHaveBeenCalledWith("full_time");
    expect(mockFormatString).toHaveBeenCalledWith("part_time");
    expect(mockFormatString).toHaveBeenCalledWith("contract");
  });
});
