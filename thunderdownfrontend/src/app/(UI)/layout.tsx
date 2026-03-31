import Header from "@/components/UI/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" min-h-full flex flex-col">
      <Header/>
      <div className="w-full my-0 mx-auto max-w-3xl">{children}</div>
    </main>
  );
}
