import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { HandPalm, List, XSquare } from "phosphor-react";

function SideBar() {
  return (
    <div className="bg-white bg-opacity-60">
      <Menu>
        <MenuHandler>
          <Button variant="text">
            <List size={49} />
          </Button>
        </MenuHandler>
        <MenuList className="flex gap-2 bg-opacity-60">
          <aside className="flex flex-col bg-white bg-opacity-60 w-60 min-w-[140px] h-full">
            <ul className="pl-2 mt-4">
              <h1 className="font-black  ">Pacientes</h1>
              <li>adicionar</li>
              <li>atualizar</li>
              <li>remover</li>
            </ul>
            <ul className=" pl-2 mt-4">
              <h1 className="font-black  ">Procedimentos</h1>
              <li>adicionar</li>
              <li>atualizar</li>
              <li>remover</li>
            </ul>
            <ul className=" pl-2 mt-4 flex flex-col">
              <h1 className="font-black  ">Farmacia</h1>
              <a href="/createProvider">fornecedor</a>
              <a href="/createProduct">produtos</a>
              <a href="/listProduct">listar produtos</a>
              <a href="/listProductSales">listar produtos vendidos</a>
              <a href="/listProductByPatient">listar produtos por paciente</a>
            </ul>
          </aside>
        </MenuList>
      </Menu>
    </div>
  );
}

export default SideBar;
