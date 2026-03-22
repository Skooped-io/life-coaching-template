import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

interface SeoHeadProps {
  page: keyof typeof siteConfig.seo;
}

export default function SeoHead({ page }: SeoHeadProps) {
  const seo = siteConfig.seo[page];

  useEffect(() => {
    if (seo?.title) document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seo?.description) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, [seo]);

  return null;
}

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${siteConfig.businessName} ${siteConfig.tagline}`,
    "telephone": siteConfig.phone || undefined,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
    },
    "areaServed": siteConfig.serviceArea,
    "description": siteConfig.seo.home.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
