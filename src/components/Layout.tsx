import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SchemaOrg } from "./SeoHead";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg />
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
