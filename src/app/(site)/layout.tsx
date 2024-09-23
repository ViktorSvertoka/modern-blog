import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="max-w-[1000px] mx-auto px-10 md:px-24">{children}</main>
    </>
  );
}
