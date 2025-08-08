// Cloudflare Pages Function for contact form submission
// To use this function:
// 1. Enable Functions in your Cloudflare Pages project
// 2. Deploy with this file in the /functions directory
// 3. The function will be available at /api/contact

export const onRequestPost = async (context) => {
  try {
    const { request } = context;
    
    // Parse the form data
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    
    // Example: Send email using Resend or similar service
    /*
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@ahmerzulfiqar.dev",
        to: "hello@ahmerzulfiqar.dev",
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Budget:</strong> ${formData.budget}</p>
          <p><strong>Timeline:</strong> ${formData.timeline}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
      }),
    });
    */

    // For now, just log the submission
    console.log("Contact form submission:", formData);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      }),
      { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Internal server error. Please try again later."
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
