"use server";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error("Verification failed:", SMTP_SERVER_USERNAME, error);
    return;
  }
  try {
    const info = await transporter.sendMail({
      from: email,
      to: sendTo || SITE_MAIL_RECEIVER,
      subject: subject,
      text: text,
      html: html ? html : "",
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", SITE_MAIL_RECEIVER);
    return info;
  } catch (err) {
    switch (err.code) {
      case "ECONNECTION":
      case "ETIMEDOUT":
        console.error("Network error - retry later:", err.message);
        break;
      case "EAUTH":
        console.error("Authentication failed:", err.message);
        break;
      case "EENVELOPE":
        // err.rejected is only present when every recipient was refused
        console.error("Invalid envelope:", err.message, err.rejected || []);
        break;
      default:
        console.error("Send failed:", err.message);
        return;
    }
  }
}
