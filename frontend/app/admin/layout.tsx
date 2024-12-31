import AdminHeader from "@/components/admin/AdminHeader";
import AdminMenu from "@/components/admin/AdminMenu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      <div className="flex container mx-auto px-8">
        <div className="w-1/5">
          <AdminMenu />
        </div>
        <main className="w-4/5 p-8">{children}</main>
      </div>
    </div>
  );
};

export default layout;
