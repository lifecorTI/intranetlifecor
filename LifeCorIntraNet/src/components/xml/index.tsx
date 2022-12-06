import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiGet } from "../../service/api";
import XML from "./xmlViewer";

type RequestXML = {
  content: string;
  createdAt: string;
  id: string;
  name: string;
  userId: string;
};

function XMLView() {
  const [xml, setXml] = useState<RequestXML[]>([]);

  const parser = new DOMParser();

  useEffect(() => {
    const fetch = async () => {
      await apiGet("/nfe")
        .then((res) => {
          const data = res.map((e: RequestXML) => {
            return e;
          });
          setXml(data);
        })
        .catch((err) => toast.error(err.message));
    };
    fetch();
  }, []);

  return (
    <div className="bg-white w-full bg-opacity-60">
      {xml.map((v: any, i: any) => {
        const xmlParser = parser.parseFromString(v.content, "application/xml");
        return <div key={i}>{<XML props={xmlParser} />}</div>;
      })}
    </div>
  );
}

export default XMLView;
