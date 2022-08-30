import React from "react";
import ValveControlDash from "../component/views/valveController/valveControl_main";

const HOST = process.env.NEXT_PUBLIC_HOST;
export async function getServerSideProps() {
  try {
    let response = await fetch(HOST + "/api/valve/valveList");
    response = await response.json();
    if (response.status) {
      let valveList = response.data;
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
