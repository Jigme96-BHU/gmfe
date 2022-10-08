import { serialize } from "cookie";

const cookie_name = process.env.COOKIE_NAME;
export default async function Logout(req, res) {
  if (req.method === "GET") {
    try {
      const serialised = serialize(cookie_name, null, {
        httpOnly: true,
        // secure: process.env.NODE_ENV !== "development",
        secure: false,
        sameSite: "strict",
        maxAge: -1,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialised);

      res.json({ status: true }); //logged out
    } catch (error) {
      res.json({ status: false }); //not logged out
    }
  }
}