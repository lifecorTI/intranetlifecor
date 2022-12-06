import { ChangeEvent, FormEvent, useState } from "react";
import Header from "../../../components/header";
import { api } from "../../../service/apiAxios";
import { toast } from "react-toastify";
import XMLView from "../../../components/xml";
import { CircleDashed } from "phosphor-react";

function AddNfe() {
  const user = JSON.parse(localStorage.getItem("@lifeCor:user") || "{}");
  const token = localStorage.getItem("@lifeCor:token") || "{}";
  const [xml, setXml] = useState<File>() as any;
  const [loading, setLoading] = useState(false);
  async function handleSelectXml(e: ChangeEvent<HTMLInputElement>) {
    setLoading(true);
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

    setXml(file);
    setLoading(false);
  }

  async function handleSubmit(e: FormEvent) {
    setLoading(true);
    e.preventDefault();

    if (!xml) {
      toast.error("selecione um arquivo");
      setLoading(false);
      return;
    }
    const data = new FormData();

    data.append("userId", user.id);
    data.append("content", xml);

    try {
      await api.post("/nfe", data, {
        headers: {
          authorization: "bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      });
      setXml[""];

      toast.success("Cadastrado com sucesso!");
      setLoading(false);
    } catch (err: any) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full">
      <Header />
      <div className="p-10 h-full">
        <form
          className="bg-white bg-opacity-60 p-5 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">Coloque o arquivo xml</label>
          <input
            type="file"
            accept="text/xml"
            name="content"
            onChange={handleSelectXml}
          />
          <button
            type="submit"
            className="bg-green-500 w-[300px] h-[30px] absolute right-20 flex items-center justify-center text-white rounded-md"
          >
            {loading ? <CircleDashed className="animate-spin" /> : "Enviar"}
          </button>
        </form>
        <XMLView />
      </div>
    </div>
  );
}

export default AddNfe;
