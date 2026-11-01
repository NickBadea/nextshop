import ContactForm from "./ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Contact",
  description:
    "Contactează NextShop pentru oferte și informații despre mobilier comercial pentru magazine.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <ContactForm />
    </>
  );
}