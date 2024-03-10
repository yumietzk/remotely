import { searchJobs } from "../searchJobs";
import * as formatString from "../formatString";

// Mock function
const mockFormatString = jest.spyOn(formatString, "formatString");

afterEach(() => {
  jest.clearAllMocks();
});

describe("searchJobs function", () => {
  const jobs = [
    { title: "Software Engineer Manager" },
    { title: "Front-end Developer" },
    { title: "Backend Developer" },
    { title: "Senior Fullstack Engineer" },
  ];

  test("should filter jobs by search term correctly", () => {
    const searchTerm = "Developer";

    // Configure mockFormatString to return the correct value
    mockFormatString.mockReturnValueOnce("developer");
    mockFormatString.mockReturnValueOnce("softwareengineermanager");
    mockFormatString.mockReturnValueOnce("frontenddeveloper");
    mockFormatString.mockReturnValueOnce("backenddeveloper");
    mockFormatString.mockReturnValueOnce("seniorfullstackengineer");

    const result = searchJobs(jobs, searchTerm);

    expect(result).toEqual([
      { title: "Front-end Developer" },
      { title: "Backend Developer" },
    ]);
    expect(mockFormatString).toHaveBeenCalledTimes(5);
    expect(mockFormatString).toHaveBeenCalledWith(searchTerm);
    expect(mockFormatString).toHaveBeenCalledWith("Software Engineer Manager");
    expect(mockFormatString).toHaveBeenCalledWith("Front-end Developer");
    expect(mockFormatString).toHaveBeenCalledWith("Backend Developer");
    expect(mockFormatString).toHaveBeenCalledWith("Senior Fullstack Engineer");
  });

  test("should return an empty array when there's no match", () => {
    const searchTerm = "AWS";

    // Configure mockFormatString to return the correct value
    mockFormatString.mockReturnValueOnce("aws");
    mockFormatString.mockReturnValueOnce("softwareengineermanager");
    mockFormatString.mockReturnValueOnce("frontenddeveloper");
    mockFormatString.mockReturnValueOnce("backenddeveloper");
    mockFormatString.mockReturnValueOnce("seniorfullstackengineer");

    const result = searchJobs(jobs, searchTerm);

    expect(result).toEqual([]);
    expect(mockFormatString).toHaveBeenCalledTimes(5);
    expect(mockFormatString).toHaveBeenCalledWith(searchTerm);
    expect(mockFormatString).toHaveBeenCalledWith("Software Engineer Manager");
    expect(mockFormatString).toHaveBeenCalledWith("Front-end Developer");
    expect(mockFormatString).toHaveBeenCalledWith("Backend Developer");
    expect(mockFormatString).toHaveBeenCalledWith("Senior Fullstack Engineer");
  });
});
