import Header from "../../components/header";
import SideBar from "../../components/sideBar";

function SalesProducts() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex h-full ">
        <SideBar />
        <div className="bg-white w-full bg-opacity-60 m-5 p-5">
          <form>
            <label htmlFor="name">product</label>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalesProducts;
