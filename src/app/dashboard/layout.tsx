import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </section>
  );
}
