/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import firebaseApp, { db } from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";
import { useState } from "react";

export default function LayOut() {
  let [user, setUser] = useState();
  let [type, settype] = useState("");

  firebaseApp.auth().onAuthStateChanged((usr) => {
    if (usr) {
      //console.log(user);
      user = usr;
      setUser(user);
      type = firebaseApp.auth().currentUser.displayName;
      settype(type);
      //window.location.reload(false);

      //console.log(type);
    }
  });

  // var MainLayout = () => {
  //   if (user) {
  //     if (type === "talent") {
  //       debugger;
  //       //window.location.reload(false);
  //       return <TalentRoutes />;
  //     } else if (type === "client") {
  //       //window.location.reload(false);
  //       debugger;
  //       return <ClientRoutes />;
  //     }
  //   } else {
  //     return <BeforeLoginRoutes />;
  //   }
  // };
  return (
    <>
      {user ? (
        type === "talent" ? (
          <TalentRoutes />
        ) : (
          type === "client" && <ClientRoutes />
        )
      ) : (
        <BeforeLoginRoutes />
      )}
      {/* <MainLayout /> */}
    </>
  );
}
