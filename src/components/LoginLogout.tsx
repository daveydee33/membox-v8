import React, { useContext } from "react";
import {
  FirebaseContext,
  useUserDataFirebase,
  loginWithGooglePopup,
  logout,
} from "@/firebase";
import Image from "next/image";
import { Button } from "@mui/material";

const LoginLogout = () => {
  const { currentUserFirebase, favorites, progress, role } =
    useContext(FirebaseContext);

  const handleLogin = async () => {
    const loginResponseData = await loginWithGooglePopup();
    // console.log("loginResponseData", loginResponseData);
    // if (loginResponseData) {
    //   console.log("user logged in!", loginResponseData);
    //   // setUser(loginResponseData.user) // context
    //   // dispatch(handleLogin(loginResponseData)) // redux
    // }
  };

  console.log("currentUserFirebase.photoURL", currentUserFirebase?.photoURL);

  const handleLogout = async () => logout();

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      {currentUserFirebase && (
        <>
          {currentUserFirebase?.email}{" "}
          {currentUserFirebase?.photoURL && (
            <Image
              src={currentUserFirebase.photoURL}
              alt="avatar"
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            ></Image>
          )}
          <Button onClick={handleLogout} size="small">
            Logout
          </Button>
        </>
      )}
      {!currentUserFirebase && <Button onClick={handleLogin}>Login</Button>}
    </div>
  );
};

export default LoginLogout;
