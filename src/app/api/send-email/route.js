import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, mail, offer } = await request.json();

    // Send email to yourself
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@iyanu.codes>",
      to: ["iyanu1396@gmail.com"],
      reply_to: mail,
      subject: `📬 New Portfolio Contact: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #667eea; }
              .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📬 New Message from iyanu.codes Portfolio</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">From:</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email:</span> <a href="mailto:${mail}">${mail}</a>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">
                    ${offer.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Iyanu <onboarding@iyanu.codes>",
      to: [mail],
      subject: "Thank you for reaching out!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
              a { color: #667eea; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>✓ Message Received</h2>
              </div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for reaching out through my portfolio at <a href="https://iyanu.codes">iyanu.codes</a>.</p>
                <p>I've received your message and will get back to you as soon as possible. I typically respond within 24-48 hours.</p>
                <p>Looking forward to connecting with you!</p>
                <p>Best regards,<br><strong>Iyanu</strong></p>
              </div>
              <div class="footer">
                <p>This is an automated confirmation email from iyanu.codes</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
