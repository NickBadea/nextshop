import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

type Product = {
  id: string;
  name: string;
  slug: string;
  quantity: number;
};

export async function POST(req: Request) {
  const { name, phone, company, email, message, products } = await req.json();

  const productsHtml = (products as Product[])
    .map((p) => `<li>${p.name} &times; ${p.quantity}</li>`)
    .join("");

  const html = `
    <h2>Cerere de ofertă nouă</h2>
    <p><strong>Nume:</strong> ${name}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Firmă:</strong> ${company || "-"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mesaj:</strong> ${message || "-"}</p>
    <p><strong>Produse:</strong></p>
    <ul>${productsHtml}</ul>
  `;

  try {
    await sendMail({
      subject: `Cerere de ofertă nouă de la ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Eroare la trimiterea email-ului:", error);
    return NextResponse.json({ error: "Eroare la trimiterea email-ului" }, { status: 500 });
  }
}
