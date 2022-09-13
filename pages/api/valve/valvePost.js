export default function valvePostHandler(req, res) {
  try {
    if (req.method == "POST") {
      res.json({ status: true, message: "Post to DB", data: req.body });
    }
  } catch (error) {
    res.json({
      status: false,
      response: error.message,
    });
  }
}
