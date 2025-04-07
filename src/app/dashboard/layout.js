import DashboardSidebar from "@/components/layout/DashboardSidebar";
import React from "react";

export default function DashboardLayout({ children }) {
  return <DashboardSidebar>{children}</DashboardSidebar>;
}
