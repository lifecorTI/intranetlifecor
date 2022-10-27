import { HouseSimple } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/auth/authContext";
function Header() {
  const user = JSON.parse(localStorage.getItem("@lifeCor:user") || "{}");
  const navigate = useNavigate();
  const { signOut } = useContext(authContext);

  function handleNavigate() {
    navigate("/home");
  }
  return (
    <header className="w-full bg-white bg-opacity-60 flex justify-between items-center p-3">
      <span className="text-lg flex gap-3 ">
        {" "}
        <HouseSimple
          size={30}
          onClick={() => handleNavigate()}
          className="cursor-pointer"
        />
        {user.name}
      </span>
      <nav></nav>
      <button
        onClick={signOut}
        className="bg-red-600 rounded-lg px-2 border-none text-white"
      >
        sair
      </button>
    </header>
  );
}

export default Header;
