export default async function (req, res) {
  try {

    if (req.method !== "POST") {
      return res.status(200).json({ ok: true });
    }

    // 🔥 Lê o body manualmente
    let body = "";

    for await (const chunk of req) {
      body += chunk;
    }

    const json = JSON.parse(body);

    console.log("Webhook recebido:");
    console.log(json);

    return res.status(200).json({ recebido: true });

  } catch (error) {
    console.error("Erro:", error);
    return res.status(200).json({ ok: true });
  }
}
