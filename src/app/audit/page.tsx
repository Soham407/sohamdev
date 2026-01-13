import { Metadata } from "next";
import AuditForm from "./AuditForm";

export const metadata: Metadata = {
  title: "Free Website Audit | sohamdev.studio",
  description:
    "Get a free 60-second video audit of your business website. No sales pressure, just actionable tips to improve conversion and speed.",
};

export default function AuditPage() {
  return <AuditForm />;
}
