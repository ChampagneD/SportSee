import { async } from "q";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockdata";

const API_ROOT = "http://localhost:3000";

export const getUserAsync = async (userId) => {
  try {
    const res = await fetch(`${API_ROOT}/user/${userId}`);
    if (res.status === 404) {
      const err = new Error(404);
      err.status = "404";
      throw err;
    }
    return res;
  } catch (error) {
    console.log("getUserError: ", error);
    return error;
  }
};
export const getUserActivityAsync = async (userId) => {
  try {
    return await fetch(`${API_ROOT}/user/${userId}/activity`);
  } catch (error) {
    console.log("getUserActivityError: ", error);
  }
};

export const getUserAverageSessionsAsync = async (userId) => {
  try {
    return await fetch(`${API_ROOT}/user/${userId}/average-sessions`);
  } catch (error) {
    console.log("getUserAverageSessionsError: ", error);
  }
};

export const getUserPerformanceAsync = async (userId) => {
  try {
    return await fetch(`${API_ROOT}/user/${userId}/performance`);
  } catch (error) {
    console.log("getUserPerformanceError: ", error);
  }
};

/**
 * Asynchronous service calls to retrieve data to display the dashboard.
 * @params {userId} The ID of the User as an integer
 * @returns A object containing all the required data (user, activity, average, performance)
 */

export const getDashboardDataAsync = async (userId) => {
  try {
    const userReq = getUserAsync(userId);
    const userActivityReq = getUserActivityAsync(userId);
    const userAverageSessionsReq = getUserAverageSessionsAsync(userId);
    const userPerformanceReq = getUserPerformanceAsync(userId);

    const User = await userReq;

    if (User.status === "404") {
      const err = new Error(404);
      err.status = "404";
      throw err;
    }

    return {
      user: await User.json(),
      activity: await (await userActivityReq).json(),
      average: await (await userAverageSessionsReq).json(),
      performance: await (await userPerformanceReq).json(),
    };
  } catch (error) {
    console.log("Error: ", error);
    console.error("API down using mocked data");
    let status;
    if (error.status === "404") {
      status = error.status;
    }

    return {
      user: USER_MAIN_DATA,
      activity: USER_ACTIVITY,
      average: USER_AVERAGE_SESSIONS,
      performance: USER_PERFORMANCE,
      status,
    };
  }
};
