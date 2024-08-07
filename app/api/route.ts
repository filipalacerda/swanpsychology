import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: Request | NextRequest) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.formData();
  const name = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${name} ${lastName} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json(
      {
        message: "Success: email was sent",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
