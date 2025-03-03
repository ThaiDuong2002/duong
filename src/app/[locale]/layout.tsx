import Navbar from "@/components/custom/navbar";
import { CustomThemeProvider } from "@/components/themes";
import { Locale, routing } from "@/i18n/routing";
import { MetadataProps } from "@/types";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async ({
  params,
}: Readonly<{
  params: Promise<{ locale: Locale }>;
}>) => {
  const { locale } = await params;

  const messages = (await getMessages({ locale })) as unknown as MetadataProps;
  const title = messages.metadata.title;
  const description = messages.metadata.description;

  return {
    title,
    description,
    icons: {
      icon: "/page-icon.png",
    },
  };
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}>) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <div className="flex justify-center items-center w-full h-auto">
              {children}
            </div>
          </NextIntlClientProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
