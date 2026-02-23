export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ status: "online" });
  }

  return res.status(200).json({
    status: "ok",
    received: req.body
  });
}
