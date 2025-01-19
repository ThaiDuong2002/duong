import Navbar from "@/components/custom/navbar";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

interface MetadataProps {
  Metadata: {
    title: string;
    description: string;
  };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: Locale };
}) => {
  const messages = (await getMessages({ locale })) as unknown as MetadataProps;
  const title = messages.Metadata.title;
  const description = messages.Metadata.description;

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
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex h-auto items-center justify-center">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
