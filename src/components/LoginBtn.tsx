import { logout } from "@/auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

function LoginBtn() {
  return (
    <>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </>
  );
}

export default LoginBtn;
