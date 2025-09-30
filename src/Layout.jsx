import { jwtDecode } from "jwt-decode";
import { GetToken } from "./utils/token";
import { useEffect } from "react";

const Layout = () => {
  const decoded = GetToken() && jwtDecode(GetToken());
  const expiredTime = new Date(decoded.exp).getTime() * 1000;
  const Time = new Date().getTime();

  console.log(expiredTime, Time);

  const isAdmin =
    decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ==
    "Admin";
  console.log(decoded);
  useEffect(() => {
    expiredTime < Time ? Navigate("/")
  }, []);
  return <div>{isAdmin ? "IsAdmin" : "User"}</div>;
};

export default Layout;
