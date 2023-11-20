import MyContext from "@/Helper/Context";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  MyContext;
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
