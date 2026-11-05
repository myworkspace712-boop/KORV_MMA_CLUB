require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => console.error('MongoDB connection error:', error));
} else {
  console.warn('Warning: MONGO_URI is not defined in your .env file');
}

// Basic CORS header middleware to allow requests from Vite frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL || 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Configure email transporter
if (
  !process.env.EMAIL_USER ||
  process.env.EMAIL_USER === 'your_email@gmail.com' ||
  !process.env.EMAIL_APP_PASSWORD ||
  process.env.EMAIL_APP_PASSWORD === 'your_16_char_app_password'
) {
  console.warn(
    'Warning: EMAIL_USER or EMAIL_APP_PASSWORD in backend/.env is still set to placeholder values. Emails will not be delivered until valid Gmail credentials are configured.'
  );
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Create the user in MongoDB (assuming a Mongoose User model)
    // const newUser = await User.create({ name, email, password, isVerified: false });

    // 2. Generate a token that expires in 1 hour
    const verificationToken = jwt.sign(
      { email: email }, 
      process.env.JWT_SECRET || 'primate_mma_secret', 
      { expiresIn: '1h' }
    );

    // 3. Construct the frontend verification link
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const verificationLink = `${clientUrl}/verify-email?token=${verificationToken}`;

    // 4. Send the email
    console.log("Attempting to send verification email to:", email);

    await transporter.sendMail({
      from: `"KORV MMA Club" <${process.env.EMAIL_USER || 'noreply@korvmmaclub.com'}>`,
      to: email,
      subject: 'Verify Your KORV MMA Club Account',
      html: `
        <h2>Welcome to the team, ${name || 'Athlete'}!</h2>
        <p>Click the link below to verify your account and access your dashboard:</p>
        <a href="${verificationLink}" style="padding: 10px 20px; background-color: #d32f2f; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a>
      `
    });

    console.log("Verification email sent successfully to:", email);

    res.status(201).json({ message: 'Registration successful. Check your email to verify.' });
  } catch (error) {
    console.error("Detailed Registration Error:", error); // Add this line!
    res.status(500).json({ error: 'Server error during registration' });
  }
});

app.get('/api/verify', async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'primate_mma_secret');
    
    // Update user in MongoDB Atlas
    // await User.findOneAndUpdate({ email: decoded.email }, { isVerified: true });

    res.status(200).json({ message: 'Email verified successfully', email: decoded.email });
  } catch (error) {
    res.status(400).json({ error: 'Invalid or expired token' });
  }
});

app.get('/api/verify-email', (req, res) => {
  res.redirect(`/api/verify?token=${req.query.token || ''}`);
});

// Delete user account endpoint
app.delete('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Example using Mongoose/MongoDB
    // await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "Account successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error during deletion" });
  }
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

