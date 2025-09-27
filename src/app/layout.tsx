import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { defaultSEO } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Force light theme on initial load
                if (typeof window !== 'undefined') {
                  localStorage.setItem('theme', 'light');
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  
                  // Immediately remove extension attributes from body and documentElement
                  const removeExtensionAttributes = () => {
                    const attributesToRemove = [
                      'data-gr-ext-installed',
                      'data-new-gr-c-s-check-loaded',
                      'data-gr-c-s-loaded',
                      'data-new-gr-c-s-check-loaded'
                    ];
                    
                    [document.body, document.documentElement].forEach(element => {
                      if (element) {
                        attributesToRemove.forEach(attr => {
                          if (element.hasAttribute(attr)) {
                            element.removeAttribute(attr);
                          }
                        });
                      }
                    });
                  };
                  
                  // Remove attributes immediately
                  removeExtensionAttributes();
                  
                  // Remove attributes on DOMContentLoaded
                  document.addEventListener('DOMContentLoaded', removeExtensionAttributes);
                  
                  // Remove attributes on window load
                  window.addEventListener('load', removeExtensionAttributes);
                  
                  // Prevent browser extensions from interfering with hydration
                  const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                      if (mutation.type === 'attributes') {
                        const target = mutation.target;
                        if (target.nodeType === 1) {
                          // Remove Grammarly and other extension attributes
                          const attributesToRemove = [
                            'data-gr-ext-installed',
                            'data-new-gr-c-s-check-loaded',
                            'data-gr-c-s-loaded'
                          ];
                          attributesToRemove.forEach(attr => {
                            if (target.hasAttribute(attr)) {
                              target.removeAttribute(attr);
                            }
                          });
                        }
                      }
                      if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach((node) => {
                          if (node.nodeType === 1) {
                            // Remove extension elements
                            if (node.id && (node.id.includes('scrnli') || node.id.includes('grammarly'))) {
                              node.remove();
                            }
                            // Remove extension attributes from added nodes
                            const attributesToRemove = [
                              'data-gr-ext-installed',
                              'data-new-gr-c-s-check-loaded',
                              'data-gr-c-s-loaded'
                            ];
                            attributesToRemove.forEach(attr => {
                              if (node.hasAttribute && node.hasAttribute(attr)) {
                                node.removeAttribute(attr);
                              }
                            });
                          }
                        });
                      }
                    });
                  });
                  
                  // Observe both body and documentElement for comprehensive coverage
                  observer.observe(document.body, { 
                    childList: true, 
                    subtree: true, 
                    attributes: true, 
                    attributeFilter: ['data-gr-ext-installed', 'data-new-gr-c-s-check-loaded', 'data-gr-c-s-loaded']
                  });
                  observer.observe(document.documentElement, { 
                    attributes: true, 
                    attributeFilter: ['data-gr-ext-installed', 'data-new-gr-c-s-check-loaded', 'data-gr-c-s-loaded']
                  });
                  
                  // Set up interval to continuously remove attributes
                  setInterval(removeExtensionAttributes, 100);
                }
              } catch (e) {
                // Ignore errors
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
