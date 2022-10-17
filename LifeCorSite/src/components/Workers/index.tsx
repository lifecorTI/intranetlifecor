import { WorkersContainer } from "./styles";
import { FaUserNinja } from "react-icons/fa";
import { workers } from "../../utils/workers";

function Workers() {
  return (
    <WorkersContainer>
      <h1>Conheça nossa equipe</h1>
      <br />
      <ul>
        {workers.map((w) => {
          return (
            <li key={w.name}>
              <div className="photo_container">
                {w.img == "" ? <FaUserNinja /> : <img src={w.img} alt="" />}
              </div>

              <h2>{w.name}</h2>
              <section>
                <div>
                  <h3>Cargo</h3>
                  <p>
                    <strong>{w.function}</strong>
                  </p>
                </div>
                <div>
                  <h3>Formação</h3>
                  <p>
                    <strong>{w.details.formation}</strong>
                  </p>
                </div>
                <div>
                  <h3>Registro</h3>
                  <p>
                    <strong>{w.details.registration}</strong>
                  </p>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </WorkersContainer>
  );
}

export { Workers };
