import { useEffect, useState } from "react";
import { auth } from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";

export default function LayOut() {


  const [usr, setUsr] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUsr(user);
      }
    })
  }, [])

  if (usr) {
    if (usr.displayName === "talent" || usr.displayName === "both") {
      return <TalentRoutes />
    } else if (usr.displayName === "client") {
      return <ClientRoutes />
    }
  } else {
    return <BeforeLoginRoutes />
  }
}
