import React, { useContext } from "react";
import {
  FirebaseContext,
  useUserDataFirebase,
  loginWithGooglePopup,
  logout,
} from "@/firebase";
import Image from "next/image";

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
    <div>
      {currentUserFirebase && (
        <div>
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
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!currentUserFirebase && (
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginLogout;
