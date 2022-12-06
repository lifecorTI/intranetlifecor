import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Patients from "../../components/patients";
import SideBar from "../../components/sideBar";

function home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = "Bearer" + " " + localStorage.getItem("@lifeCor:token");
    if (!token) {
      navigate("/");
    }
  }, []);
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
