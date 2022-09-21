import React from "react";
import ValveControlDash from "../component/views/valveController/valveControl_main";

<<<<<<< HEAD
const server = process.env.NEXT_PUBLIC_SERVER;
const host = process.env.NEXT_PUBLIC_HOST;

export async function getServerSideProps() {
  try {
    let response = await fetch(server + "/data/valvelist"); // GET ALL VALVE API
    // let response = await fetch(host + "/api/valve/valveList");
    response = await response.json();
    if (response.status) {
      let valveList = response.datas;
      return {
        props: {
          valveList,
        },
      };
    } else {
      return {
        props: {
          valveList: [],
        },
      };
    }
  } catch (error) {
    return {
      props: {
        valveList: [],
      },
    };
  }
}

export default function ValveController({ valveList }) {
  return <ValveControlDash valveList={valveList} />;
=======
export default function ValveController() {
  return <ValveControlDash />;
>>>>>>> 9b0df8c67784dc123598a29378502143f5dc9d55
}
