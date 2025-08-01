import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const message = `
    <strong>Ime i Prezime:</strong> ${body.ime}<br>
    <strong>Email:</strong> ${body.email}<br>
    <strong>Telefon:</strong> ${body.telefon}<br>
    <strong>Grad:</strong> ${body.grad}<br>
    <strong>Ulica i broj:</strong> ${body.ulica}<br>
    <strong>Predmet:</strong> ${body.predmet}<br>
    <strong>Dimenzije (cm) (širina x duljina x visina):</strong> ${body.dimenzije}<br>
    <strong>Broj prozora:</strong> ${body.broj_prozora}<br>
    <strong>Broj sekcijskih vrata:</strong> ${body.sekcijska_vrata}<br>
    <strong>Broj jednokrilnih vrata:</strong> ${body.jednokrilna_vrata}<br>
    <strong>Izgled krovišta:</strong> ${body.izgled_krovista}<br>
    <strong>Debljina termopanela (mm):</strong> ${body.debljina_termopanela}<br>
    <strong>Boja krovišta:</strong> ${body.boja_krovista}<br>
    <strong>Boja zidova:</strong> ${body.boja_zidova}<br>
    <strong>Poruka:</strong> ${body.poruka}
  `;

  try {
    // Email sent to your work email
    await resend.emails.send({
      from: "beriko@beriko.com",
      to: "beriko@beriko.com",
      subject: "Novi upit s web stranice",
      html: message,
    });

    // Confirmation email sent back to the user
    await resend.emails.send({
      from: "Beriko <beriko@beriko.com>",
      to: body.email,
      subject: "Potvrda primitka vašeg upita",
      html: `
        <p>Poštovani/a ${body.ime},</p>
        <p>Zaprimili smo vaš upit te ćemo vam odgovoriti u najkraćem mogućem roku.</p>
        <p>Srdačan pozdrav,<br/>Beriko</p>`,
    });

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
