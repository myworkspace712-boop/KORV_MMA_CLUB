const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log("--- STARTING EMAIL TEST ---");
  
  // 1. Check if the .env file is actually being read
  console.log("Checking Environment Variables:");
  console.log("User:", process.env.EMAIL_USER ? "Loaded successfully" : "MISSING!");
  console.log("Pass:", process.env.EMAIL_APP_PASSWORD ? "Loaded successfully" : "MISSING!");

  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.log("\nERROR: Your .env variables are not loading.");
    console.log("Make sure your .env file is in the root of your backend folder, not inside another folder.");
    return;
  }

  // 2. Configure Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  // 3. Attempt to send
  try {
    console.log("\nAttempting to contact Gmail servers...");
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending it to yourself to verify receipt
      subject: "Test Email from Node.js",
      text: "If you are reading this, Nodemailer is fully configured and working!"
    });
    console.log("\n✅ SUCCESS! Email sent.");
    console.log("Message ID:", info.messageId);
    console.log("Check your inbox (and spam folder) for", process.env.EMAIL_USER);
  } catch (error) {
    console.log("\n❌ FAILED! The exact reason from Google is:");
    console.error(error);
  }
}

testEmail();
