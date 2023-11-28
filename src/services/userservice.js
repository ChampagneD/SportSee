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
    return await fetch(`${API_ROOT}/user/${userId}`);
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

    return {
      user: await (await userReq).json(),
      activity: await (await userActivityReq).json(),
      average: await (await userAverageSessionsReq).json(),
      performance: await (await userPerformanceReq).json(),
    };
  } catch (error) {
    console.log("Error: ", error);
    console.error("API down using mocked data");

    const user = USER_MAIN_DATA.find((obj) => obj.id === parseInt(userId));
    const activity = USER_ACTIVITY.find(
      (obj) => obj.userId === parseInt(userId)
    );
    const average = USER_AVERAGE_SESSIONS.find(
      (obj) => obj.userId === parseInt(userId)
    );
    const performance = USER_PERFORMANCE.find(
      (obj) => obj.userId === parseInt(userId)
    );

    return {
      user: { data: user },
      activity: { data: activity },
      average: { data: average },
      performance: { data: performance },
    };
  }
};
