export default async function (req, res) {
  try {
    console.log("Método:", req.method);

    if (req.method !== "POST") {
      return res.status(200).json({ ok: true });
    }

    console.log("Body recebido:", req.body);

    return res.status(200).json({ recebido: true });

  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ erro: "Erro interno" });
  }
}
