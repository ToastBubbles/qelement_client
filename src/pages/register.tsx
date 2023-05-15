import RatingCard from "@/components/RatingCard";
import Comment from "@/components/Comment";
import AllColorStatus from "@/components/AllColorStatus";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { IUserDTO } from "@/interfaces/general";
import { useMutation } from "react-query";
import axios from "axios";

export default function Register() {
  const [newUser, setNewUser] = useState<IUserDTO>({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const userMutation = useMutation({
    mutationFn: (userDTO: IUserDTO) =>
      axios.post<IUserDTO>(`http://localhost:3000/user`, userDTO),
    onSuccess: () => {},
  });
  return (
    <>
      <Navbar />
      <h1>register</h1>
      <input
        placeholder="Username"
        onChange={(e) =>
          setNewUser((newUser) => ({
            ...newUser,
            ...{ name: e.target.value },
          }))
        }
      />
      <input
        placeholder="Email"
        type="email"
        onChange={(e) =>
          setNewUser((newUser) => ({
            ...newUser,
            ...{ email: e.target.value },
          }))
        }
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setNewUser((newUser) => ({
            ...newUser,
            ...{ password: e.target.value },
          }))
        }
      />
      <button
        onClick={() => {
          console.log("adding...");
          userMutation.mutate({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            role: newUser.role,
          });
        }}
      >
        Register
      </button>
    </>
  );
}
