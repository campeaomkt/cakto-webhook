export default function handler(req, res) {
  console.log("Método:", req.method);
  console.log("Body recebido:", req.body);

  return res.status(200).json({ ok: true });
}
