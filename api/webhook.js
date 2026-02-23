export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ status: "online" });
  }

  console.log("BODY:", req.body);

  return res.status(200).json({
    status: "ok",
    received: req.body
  });
}
