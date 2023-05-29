import RatingCard from "@/components/RatingCard";
import Comment from "@/components/Comment";
import AllColorStatus from "@/components/AllColorStatus";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import axios from "axios";
import { ILoginDTO } from "@/interfaces/general";
import Cookies from "js-cookie";
import Footer from "@/components/Foorter";

export default function Login() {
  const [loginDTO, setLoginDTO] = useState<ILoginDTO>({
    username: "",
    password: "",
  });

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
            />
            <button
              onClick={() => {
                axios
                  .post<{ access_token: string }>(
                    `http://localhost:3000/auth/login`,
                    loginDTO
                  )
                  .then((resp) => {
                    const { access_token } = resp.data;
                    Cookies.set("userJWT", access_token);
                  });
              }}
            >
              Login
            </button>
            <a href="#">forgot password?</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
