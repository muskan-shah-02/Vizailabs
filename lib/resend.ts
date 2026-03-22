export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  useCase: string;
  message?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return { success: false, error: "Email service not configured" };
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "DokyDoc Demo Requests <noreply@vizailabs.com>",
      to: ["hello@vizailabs.com"],
      subject: `Demo Request from ${data.name} at ${data.company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E3A5F;">New Demo Request — DokyDoc</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Company</td><td style="padding: 8px;">${data.company}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Team Size</td><td style="padding: 8px;">${data.teamSize}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Use Case</td><td style="padding: 8px;">${data.useCase}</td></tr>
            ${data.message ? `<tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${data.message}</td></tr>` : ""}
          </table>
        </div>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Failed to send email" };
  }
}
