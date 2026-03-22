import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  teamSize: z.string().min(1),
  useCase: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Send via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const { sendContactEmail } = await import("@/lib/resend");
      const result = await sendContactEmail(data);
      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 500 });
      }
    } else {
      // Log for development / when Resend is not configured
      console.log("Contact form submission (Resend not configured):", data);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: err.issues }, { status: 400 });
    }
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
