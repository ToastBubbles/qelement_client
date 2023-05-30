import RatingCard from "@/components/RatingCard";
import Comment from "@/components/Comment";
import AllColorStatus from "@/components/AllColorStatus";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import axios from "axios";
import { ILoginDTO } from "@/interfaces/general";
import Cookies from "js-cookie";
import Footer from "@/components/Foorter";
import { login } from "@/auth/auth";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [loginDTO, setLoginDTO] = useState<ILoginDTO>({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState<boolean>(false);
  const router = useRouter();

  const attemptLogin = (creds: ILoginDTO) => {
    login(creds).then((res) => {
      console.log(res);

      if (res) {
        router.push("/profile");
      } else {
        setLoginError(true);
      }
    });
  };
  return (
    <>
      <Navbar />
      <div className="maincontainer">
        <div className="logincontainer">
          <h1>login</h1>
          <div className="loginRegForm">
            <input
              placeholder="Username"
              // type="email"
              onChange={(e) =>
                setLoginDTO((loginDTO) => ({
                  ...loginDTO,
                  ...{ username: e.target.value },
                }))
              }
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setLoginDTO((loginDTO) => ({
                  ...loginDTO,
                  ...{ password: e.target.value },
                }))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  attemptLogin(loginDTO);
                }
              }}
            />

            <button
              onClick={() => {
                attemptLogin(loginDTO);
              }}
            >
              Login
            </button>
            {loginError && <div>incorrect login</div>}
            <a href="#">forgot password?</a>
            <Link href="/register">Register for an account</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
