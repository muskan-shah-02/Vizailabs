import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Documentation — DokyDoc",
};

// In the future this will link to MDX docs or Swagger. For now redirect to contact.
export default function DocsPage() {
  redirect("/contact");
}
