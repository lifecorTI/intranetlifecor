import { useEffect } from "react";
import Header from "../../components/header";
import Patients from "../../components/patients";
import SideBar from "../../components/sideBar";

function home() {
  useEffect(() => {}, []);
  return (
    <div className="h-full">
      <Header />
      <section className="h-full flex gap-7 w-full">
        <SideBar />
        <Patients />
      </section>
    </div>
  );
}

export default home;
