import React from "react";
import { verify } from "jsonwebtoken";
import SignUp from "/component/views/signup/signup";

//comment or uncomment this function to enable auth protection in paths
const secret = process.env.JWTSECRET;
const cookie_name = process.env.COOKIE_NAME;
export async function getServerSideProps({ req }) {
  try {
    const jwt = req.cookies[cookie_name];
    //check if jwt is valid
    let jwtDecoded = verify(jwt, secret);

    return {
      props: {
        jwt,
        user: jwtDecoded,
      },
    };
  } catch (error) {
    //if jwt is invalid redirect to login page
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  }
}

export default function SigningUp() {
  return <SignUp />;
}
