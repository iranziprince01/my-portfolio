import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // princeiranzi4@gmail.com
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // princeiranzi4@gmail.com
      to: process.env.EMAIL_USER, // princeiranzi4@gmail.com (same email)
      subject: `New Contact Form: ${body.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}" style="color: #007bff;">${body.email}</a></p>
            <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${body.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${body.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Prince Iranzi Portfolio Contact Form</p>
          </div>
        </div>
      `,
    };

    // Send email to you
    await transporter.sendMail(mailOptions);

    // Send confirmation email to client
    const clientConfirmationOptions = {
      from: process.env.EMAIL_USER, // princeiranzi4@gmail.com
      to: body.email, // Client's email
      subject: 'Thank you for your inquiry - Prince Iranzi',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #333; margin: 0; font-size: 28px;">Thank You!</h1>
              <p style="color: #666; margin: 10px 0 0 0; font-size: 16px;">Your inquiry has been received</p>
            </div>
            
            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #2196f3;">
              <h2 style="color: #1976d2; margin: 0 0 15px 0; font-size: 20px;">What happens next?</h2>
              <ul style="color: #333; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>I'll review your inquiry within the next few hours</li>
                <li>You can expect a detailed response within 24 hours</li>
                <li>I'll provide a project timeline and pricing if applicable</li>
                <li>We can schedule a call to discuss your requirements in detail</li>
              </ul>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Your Inquiry Details</h3>
              <p style="color: #666; margin: 5px 0;"><strong>Subject:</strong> ${body.subject}</p>
              <p style="color: #666; margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              ${body.company ? `<p style="color: #666; margin: 5px 0;"><strong>Company:</strong> ${body.company}</p>` : ''}
            </div>
            
            <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ff9800;">
              <h3 style="color: #f57c00; margin: 0 0 10px 0; font-size: 18px;">Need immediate assistance?</h3>
              <p style="color: #333; margin: 0 0 10px 0;">For urgent matters, feel free to reach out directly:</p>
              <p style="color: #333; margin: 0;">
                📧 <a href="mailto:princeiranzi4@gmail.com" style="color: #2196f3; text-decoration: none;">princeiranzi4@gmail.com</a><br>
                📱 <a href="tel:+250785961427" style="color: #2196f3; text-decoration: none;">+250 785 961 427</a>
              </p>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; margin: 0; font-size: 14px;">
                Best regards,<br>
                <strong style="color: #333;">Prince Iranzi</strong><br>
                <span style="color: #666;">Software Engineer & Digital Marketer</span>
              </p>
              <div style="margin-top: 20px;">
                <a href="https://princeiranzi.dev" style="color: #2196f3; text-decoration: none; font-size: 14px;">Visit my portfolio</a>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // Send confirmation email to client
    await transporter.sendMail(clientConfirmationOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
