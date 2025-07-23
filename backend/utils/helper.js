const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = async (data) => {
  try {
    // Step 1: Send Welcome Email to User
    const welcomeInfo = await transporter.sendMail({
      from: '"Mehedi Hassan" <support@meetmehedi.dev>',
      to: data.email,
      subject: "Thanks for Contacting Me!",
      replyTo: "support@meetmehedi.dev",
      html: `
    <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f9f9f9; padding: 30px; border-radius: 10px; color: #333; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 8px;">
    <h2 style="color: #2c3e50; margin-bottom: 20px;">Hello ${data.name},</h2>
    <p style="margin: 0 0 15px;">Thank you for reaching out!</p>
    <p style="margin: 0 0 15px;">I’ve received your message and will get back to you as soon as possible.</p>
    <p style="margin: 0 0 25px;">If you didn’t submit this message, please ignore this email.</p>
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 25px 0;" />
    <p style="margin: 0; font-weight: 500;">Warm regards,</p>
    <p style="margin: 5px 0 0;">Mehedi Hassan</p>
  </div>
  <p style="font-size: 12px; color: #999; text-align: center; margin-top: 20px;">
    This is an automated message. Please do not reply.
  </p>
</div>

  `,
    });

    console.log("Welcome email sent:", welcomeInfo.messageId);

    // Step 2: Send the User's Message to Mehedi (Your Inbox)
    const notifyInfo = await transporter.sendMail({
      from: '"Contact Form" <no-reply@meetmehedi.dev>',
      to: "support@meetmehedi.dev, mdmehedihassan0022@gmail.com", // Replace with your email
      subject: `New Message from ${data.name}`,
      replyTo: data.email,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f4; padding: 30px; border-radius: 10px; color: #333; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 8px;">
    <h3 style="color: #2c3e50; margin-bottom: 20px;">📩 You've received a new message from your website:</h3>
    
    <p style="margin: 0 0 10px;"><strong style="color: #444;">Name:</strong> ${
      data.name
    }</p>
    <p style="margin: 0 0 10px;"><strong style="color: #444;">Email:</strong> ${
      data.email
    }</p>
    <p style="margin: 0 0 10px;"><strong style="color: #444;">Phone:</strong> ${
      data.phone || "N/A"
    }</p>
    
    <p style="margin: 20px 0 5px;"><strong style="color: #444;">Message:</strong></p>
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007acc; border-radius: 5px;">
      ${data.message}
    </div>
  </div>
  <p style="font-size: 12px; color: #999; text-align: center; margin-top: 20px;">
    This message was sent from your website contact form.
  </p>
</div>

      `,
    });

    console.log("Contact message sent to admin:", notifyInfo.messageId);
  } catch (error) {
    console.error("Error sending emails:", error.message);
  }
};

module.exports = sendEmail;
