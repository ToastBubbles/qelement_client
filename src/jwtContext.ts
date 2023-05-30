import React from "react";
import { JWTPayload } from "jose";

const jwtContext = React.createContext<JWTPayload | null>({ user: {} });
console.log(jwtContext);

export { jwtContext };
