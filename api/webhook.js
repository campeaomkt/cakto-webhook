export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ status: "online" });
  }

  try {
    // 🔥 Repassa exatamente o JSON da Cakto para o Apps Script
    await fetch("https://script.google.com/macros/s/AKfycbw5CR1u_Ks42ESbJ2hojU2wMS46deGkR-6sFjYE3B2I8d-fFsv0h6Dv68uxpwZwea0h/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    return res.status(200).json({ forwarded: true });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
