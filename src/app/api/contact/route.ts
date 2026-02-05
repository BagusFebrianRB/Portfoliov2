import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: "Bagus Febrian <onboarding@resend.dev>", // Ganti nanti pakai domain kamu
      to: "bagusfebrian67@gmail.com",
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: #fff; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; margin: 20px 0; }
              .label { font-weight: bold; color: #666; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
              .value { margin-bottom: 20px; padding: 10px 0; border-bottom: 1px solid #ddd; }
              .footer { text-align: center; color: #999; font-size: 12px; padding: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="value">
                  <div class="label">Name</div>
                  <div style="font-size: 18px; margin-top: 5px;">${name}</div>
                </div>
                <div class="value">
                  <div class="label">Email</div>
                  <div style="font-size: 16px; margin-top: 5px;">
                    <a href="mailto:${email}" style="color: #000; text-decoration: none;">${email}</a>
                  </div>
                </div>
                <div class="value">
                  <div class="label">Message</div>
                  <div style="font-size: 16px; margin-top: 10px; line-height: 1.8;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>Sent from your portfolio contact form</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
