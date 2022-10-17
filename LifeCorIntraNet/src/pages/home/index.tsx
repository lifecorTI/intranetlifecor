import Header from "../../components/header";
import Patients from "../../components/patients";
import SideBar from "../../components/sideBar";

function home() {
  return (
    <div className="h-full">
      <Header />
      <section className="h-[94%] flex gap-7 w-full">
        <SideBar />
        <Patients />
      </section>
    </div>
  );
}

export default home;
