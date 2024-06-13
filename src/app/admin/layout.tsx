import { Nav, NavLink } from "@/app/admin/_components/Nav";
import { SchoolMgt } from "@/app/admin/_components/SchoolMgt";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        {/* <NavLink href="/admin/school-mgt">School Mgt.</NavLink> */}
        <SchoolMgt href="/admin/school-mgt/*" />
        <NavLink href="/admin/school-config">School Config.</NavLink>
        <NavLink href="/admin/access-control">Access Control</NavLink>
      </Nav>
      <div className="px-4 md:px-8">{children}</div>
    </>
  );
}
