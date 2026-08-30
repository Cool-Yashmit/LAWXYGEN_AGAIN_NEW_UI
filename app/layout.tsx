import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";
import "./lawxygen-v3.css";
import "./navbar-final.css";
import "./service-mega-light.css";
import "./service-showcase-tune.css";
import "./login-modal.css";

const bodyFont = DM_Sans({ subsets:["latin"], variable:"--lawx-body", display:"swap" });
const displayFont = Outfit({ subsets:["latin"], variable:"--lawx-display", display:"swap" });

export const metadata: Metadata = { title:"LAWXYGEN | Legal, Tax & Business Services", description:"Legal, tax, compliance, documentation and professional services in one clear experience.", icons:{ icon:"/lawxygen-favicon.png", shortcut:"/lawxygen-favicon.png", apple:"/lawxygen-favicon.png" } };

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}><body><SmoothScroll />{children}</body></html>}
