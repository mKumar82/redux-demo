// app/layout.tsx
import "./globals.css";
import ReduxProvider from "../redux/Provider";

export const metadata = {
  title: "Next.js Redux Counter",
  description: "Counter app using Redux and App Router in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
