import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/components/templates/SigninPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) redirect("/");
  return <SigninPage />;
}
