import { ILoginDTO } from "@/interfaces/general";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { resolve } from "path";

// Short duration JWT token (5-10 min)
// export function getJwtToken() {
//   return sessionStorage.getItem("jwt");
// }

// export function setJwtToken(token: any) {
//   sessionStorage.setItem("jwt", token);
// }

// // Longer duration refresh token (30-60 min)
// export function getRefreshToken() {
//   return sessionStorage.getItem("refreshToken");
// }

// export function setRefreshToken(token: any) {
//   sessionStorage.setItem("refreshToken", token);
// }

// export async function handleLogin({ username, password }: ILoginDTO) {
//   // Call login method in API
//   // The server handler is responsible for setting user fingerprint cookie during this as well
//   //   const { jwtToken, refreshToken } =
//   await login({ username, password });
//   //   setJwtToken(jwtToken);
//   //   setRefreshToken(refreshToken);

//   // If you like, you may redirect the user now
//   //   Router.push("/some-url");
// }

export async function login(loginDTO: ILoginDTO): Promise<boolean> {
  return new Promise((resolve) => {
    let outcome = false;
    axios
      .post<{ access_token: string }>(
        `http://localhost:3000/auth/login`,
        loginDTO
      )
      .then((resp) => {
        const { access_token } = resp.data;
        if (access_token != null) {
          Cookies.set("userJWT", access_token);
          console.log(access_token);

          outcome = true;
        }
        resolve(outcome);
      });
  });
}

export function logout() {
  Cookies.set("userJWT", "null");
}
