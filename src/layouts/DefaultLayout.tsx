import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const DefaultLayout = () => {
  return (
   <>
    <div className="">
     <Header/>
     <Outlet/>
    </div>
   </>
  )
}