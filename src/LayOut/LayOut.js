/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";
import Loader from "./../Components/SharedComponents/Loader/Loader";

export default function LayOut() {
  const [usr, setUsr] = useState(null);
  const [usrType, setUsrType] = useState("");

  const getUserType = (collectionName) => {
    // console.log(collectionName);
    if (collectionName) {
      const user = db
        .collection(collectionName)
        .doc(auth.currentUser.uid)
        .get();
      user.then((res) => {
        setUsrType(res.data()?.userType);
      });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //console.log(usrType,"up condition")

      if (user) {
        setUsr(user);
        getUserType(user.displayName);
      }
    });
    //console.log(usrType,"out of cond")
  }, []);

  // return(
  //   <>
  // {console.log(usrType)}
  //   {
  //   usr
  //   ? usrType=='talent'
  //    ?<TalentRoutes />
  //    :<ClientRoutes />
  //   : <BeforeLoginRoutes />

  //   }
  //   // </>
  //   // C == 0 ? null            :
  //   // V == r ? (g - b) / C     :
  //   // V == g ? (b - r) / C + 2 :
  //   //          (r - g) / C + 4 ;
  // );

  if (usr) {
    if (usrType === "talent") {
      return <TalentRoutes />;
    } else if (usrType === "client") {
      //debugger;
      return <ClientRoutes />;
    } else {
      return <Loader />;
    }
  } else {
    return <BeforeLoginRoutes />;
  }
}
