export default async function handler(req, res) {

  try {

    if (req.method !== "POST") {
      return res.status(200).json({ status: "online" });
    }

    console.log("Método:", req.method);
    console.log("Body recebido:", req.body);

    return res.status(200).json({
      status: "ok",
      recebido: req.body
    });

  } catch (error) {

    console.error("Erro:", error);

    return res.status(500).json({
      error: "Erro interno"
    });

  }
}
