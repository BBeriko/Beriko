import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY || "");

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

  // Email sent to your work email
  const dataToYou = {
    to: "beriko@beriko.com",
    from: "beriko@beriko.com",
    subject: "Novi upit s web stranice",
    text: message.replace(/<[^>]+>/g, ""),
    html: message,
    mailSettings: {
      trackingSettings: {
        clickTracking: { enable: false },
        openTracking: { enable: false },
      },
    },
  };

  // Confirmation email sent back to the user
  const confirmationEmail = {
    to: body.email,
    from: {
      email: "beriko@beriko.com",
      name: "Beriko",
    },
    replyTo: "beriko@beriko.com",
    subject: "Potvrda primitka vašeg upita",
    text: `Poštovani/a ${body.ime},\n\nZaprimili smo vaš upit te ćemo vam odgovoriti u najkraćem mogućem roku.\n\nSrdačan pozdrav,\nBeriko`,
    html: `
      <p>Poštovani/a ${body.ime},</p>
      <p>Zaprimili smo vaš upit te ćemo vam odgovoriti u najkraćem mogućem roku.</p>
      <p>Srdačan pozdrav,<br/>Beriko</p>`,
    mailSettings: {
      trackingSettings: {
        clickTracking: { enable: false },
        openTracking: { enable: false },
      },
    },
  };

  try {
    // @ts-ignore
    await mail.send(dataToYou);

    // @ts-ignore
    await mail.send(confirmationEmail);

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
