//const server = process.env.NEXT_PUBLIC_SERVER
const server = process.env.NEXT_PUBLIC_SERVER
import { POST } from "./post";

export const getDailyData = async (data) => {
  const date = data.date;
  let url = "http://119.2.122.53:5001/data/log/flow/anyday"
  let response = await POST({ url, props: { date } });
  return response;
}

export const getDailyDataLevel = async (data) => {
  const date = data.date;
  //let url = server + "/data/log/level/anyday"
  let url = "http://119.2.122.53:5001/data/log/level/anyday"
  let response = await POST({ url, props: { date } });
  return response;

}
export const getDailyDataQuality = async (data) => {
  const date = data.date;
  let url = "http://119.2.122.53:5001/data/log/quality/anyday"
  let response = await POST({ url, props: { date } });
  return response;

}


export const getMonthlyData = async (data) => {
  const date = data.date;
  let url = "http://119.2.122.53:5001/data/log/flow/month";
  let response = await POST({ url, props: { date } });
  return response;
}

export const getMonthlyDataLevel = async (data) => {
  const date = data.date;
  let url =  "http://119.2.122.53:5001/data/log/level/month";
  let response = await POST({ url, props: { date } });
  return response;
}
export const getMonthlyDataQuality = async (data) => {
  const date = data.date;
  let url = "http://119.2.122.53:5001/data/log/quality/month";
  let response = await POST({ url, props: { date } });
  return response;
}

export const getWeeklyData = async (data) => {
  const date = data.date;
  let url = "http://119.2.122.53:5001/data/log/flow/weekly";
  let response = await POST({ url, props: { date } });
  return response;
}

export const getWeeklyDataLevel = async (data) => {
  const date = data.date;
  let url = "http://119.2.122.53:5001/data/log/level/weekly";
  let response = await POST({ url, props: { date } });
  return response;
}

export const getWeeklyDataQuality = async (data) => {
  const date = data.date;
  let url = "http://119.2.122.53:5001/data/log/quality/weekly";
  let response = await POST({ url, props: { date } });
  return response;
}