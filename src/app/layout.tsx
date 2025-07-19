import "./globals.css";

type RootLayoutPropsProvider = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutPropsProvider) => {
  return (
    <html lang="en">
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
