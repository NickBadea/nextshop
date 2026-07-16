import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail(options: { subject: string; html: string }) {
  await transporter.sendMail({
    from: `NextShop Website <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_NOTIFICATION_EMAIL || process.env.SMTP_USER,
    subject: options.subject,
    html: options.html,
  });
}
