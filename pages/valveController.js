import React from "react";
import ValveControlDash from "../component/views/valveController/valveControl_main";

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
}
