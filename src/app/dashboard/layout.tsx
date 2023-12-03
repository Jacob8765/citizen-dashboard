import Navbar from "../../components/Navbar/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar currentUrl={"/dashboard"} />
      <main className="flex-1">{children}</main>
    </section>
  );
}
