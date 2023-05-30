import { logout } from "@/auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

function LogoutBtn() {
  return (
    <>
      <Link href="/colors">
        <button
          onClick={(e) => {
            logout();
            // redirect("/colors");
          }}
        >
          Logout
        </button>
      </Link>
    </>
  );
}

export default LogoutBtn;
