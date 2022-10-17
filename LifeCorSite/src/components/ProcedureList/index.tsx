import { ProcedureContainer } from "./styled";
import { GiHeartOrgan, GiBrain } from "react-icons/gi";
import { GiTechnoHeart, GiBodySwapping } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { IoBody } from "react-icons/io5";
function ProcedureList() {
  return (
    <ProcedureContainer>
      <div>
        <h2>Especialidades</h2>
        <span>Clique em saiba mais</span>
        <ul>
          <li>
            <p>
              <strong>Cateterismo</strong>
            </p>
            <div>
              <p>esquerdo e direito</p>
              <FaHeartbeat size="3rem" color="#ff0000" />
            </div>
            <a href="/catheterization">Saiba mais</a>
          </li>
          <li>
            <p>
              <strong>Angioplastia Coronária</strong>
            </p>
            <div>
              <p>Implante de stent convercional e farmacológico</p>
              <GiTechnoHeart size="3rem" color="#ff0000" />
            </div>
            <a href="/angioplasty">Saiba mais</a>
          </li>
          <li>
            <p>
              <strong>Artériografia Cerebral</strong>
            </p>
            <div>
              <p>Diagnóstico</p>
              <GiBrain size="3rem" color="#c5c5c5" />
            </div>
            <a href="/arteriography/cerebral">Saiba mais</a>
          </li>
          <li>
            <p>
              <strong>Aortagrafia</strong>
            </p>
            <div>
              <p>Torácica e abdominal</p>
              <GiHeartOrgan size="3rem" color="#ff0000" />
            </div>
            <a href="/arteriography/thoracic&abdominal">Saiba mais</a>
          </li>
          <li>
            <p>
              <strong>Artériografia dos Membros</strong>
            </p>
            <div>
              <p>Superiores e Inferiores</p>

              <GiBodySwapping size="3rem" color="#ffffff" />
            </div>
            <a href="/arteriography/limb">Saiba mais</a>
          </li>
          <li>
            <p>
              <strong>Artériografia das carótidas e vertebrais</strong>
            </p>
            <div>
              <p>Diagnóstico</p>
              <IoBody size="3rem" color="#ffffff" />
            </div>
            <a href="/arteriography/carotidAndVertebral">Saiba mais</a>
          </li>
        </ul>
      </div>
    </ProcedureContainer>
  );
}

export { ProcedureList };
