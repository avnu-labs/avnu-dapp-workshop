import "../styles/globals.css";

import { Nunito } from "next/font/google";

import BaseLayout from "@/lib/shared/components/layout/base-layout";
import { Providers } from "@/lib/shared/components/layout/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AVNU Workshop",
  description: "AVNU dApp workshop - StarknetCC 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
