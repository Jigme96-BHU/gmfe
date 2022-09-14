const server = process.env.NEXT_PUBLIC_SERVER
import { POST  } from "./post";

export const getDailyData = async (data) =>{
  const date = data.date;
  let url = server + "/data/log/flow/anyday"
  let response = await POST({url, props:{date}});
  return response;
}

export const getDailyDataLevel = async (data) =>{
  const date = data.date;
  let url = server + "/data/log/level/anyday"
  let response = await POST({url, props:{date}});
  return response;

}

export const getMonthlyData = async (data) =>{
  const date = data.date;
  let url = server + "/data/log/flow/month";
  let response = await POST({url, props:{date}});
  return response;
}

export const getMonthlyDataLevel = async (data) =>{
  const date = data.date;
  let url = server + "/data/log/level/month";
  let response = await POST({url, props:{date}});
  return response;
}

export const getWeeklyData = async (data) =>{
  const date = data.date;
  let url = server + "/data/log/flow/weekly";
  let response = await POST({url, props:{date}});
  return response;
}

export const getWeeklyDataLevel = async (data) =>{
  const date = data.date;
  let url = server + "/data/log/level/weekly";
  let response = await POST({url, props:{date}});
  return response;
}