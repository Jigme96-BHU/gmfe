import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const server = process.env.NEXT_PUBLIC_SERVER; // server hostname
const secret = process.env.JWTSECRET; // secret key for authentication
const cookie_name = process.env.COOKIE_NAME; // cookie name eg jwt


export default async function AuthLogin(req, res) {
  const { email, password } = req.body;

  let url = server + '/data/login';

  let response = await fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })

  response = await response.json();

  // check if user is authenticated
  if (response.status) {
    // create jwt token
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 30, // 30 minute cookie validity
        user: response.data, //optional user detail
      },
      secret
    );

    const serialised = serialize(cookie_name, token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV !== "development",
      secure: false,
      sameSite: "strict",
      maxAge: 60 * 40, //40 min cookie lifetime
      path: "/",
    });
    // set cookie
    res.setHeader("Set-Cookie", serialised);

  }
  res.json(response);
}


