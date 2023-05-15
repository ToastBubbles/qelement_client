import RatingCard from "@/components/RatingCard";
import Comment from "@/components/Comment";
import AllColorStatus from "@/components/AllColorStatus";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Login() {
  // const [newUser, setNewUser] = useState<>({
  //   name: "",
  //   password: "",
  // });

  return (
    <>
      <Navbar />
      <h1>login</h1>

      <input
        placeholder="Email"
        type="email"
        // onChange={(e) =>

        // }
      />
      <input
        placeholder="Password"
        type="password"
        // onChange={(e) =>

        // }
      />
      <button
        onClick={() => {
          console.log("adding...");
        }}
      >
        Login
      </button>
    </>
  );
}
