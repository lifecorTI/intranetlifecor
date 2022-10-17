import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProcedureList } from "../../components/ProcedureList";
import { LottieAnimation } from "../../components/LottieAnimations";

import { CatheterizationContainer } from "./styles";

import lottieCat from "../../assets/lottie/health-cat.json";

function Catheterization() {
  return (
    <CatheterizationContainer>
      <Header />
      <div className="container_info">
        <p>
          <span>
            O <strong>Cateterismo</strong> cardíaco é um exame muito importante
            para a Cardiologia. Através dele, é possível diagnosticar obstruções
            nos vasos sanguíneos que irrigam o coração, assim como outros
            problemas estruturais deste órgão, aperfeiçoando o diagnóstico das
            cardiopatias.
          </span>
          <LottieAnimation
            animation={lottieCat}
            width={"20rem"}
            height={"20rem"}
          />
        </p>
        <p>
          <span>
            As obstruções nas artérias coronárias são causadas por placas de
            ateroma (popularmente chamadas placas de gordura). Elas limitam ou
            impedem a passagem do sangue para o coração. Uma vez que o fluxo
            seja interrompido (no dito popular, veia entupida), o músculo
            cardíaco pode sofrer um infarto.{" "}
          </span>
        </p>
        <p>
          <span>
            Além de identificar a existência e a gravidade de uma ou mais
            obstruções nas artérias coronárias, o{" "}
            <strong>cateterismo cardíaco</strong> permite também identificar
            outros problemas estruturais no coração. Assim, o médico consegue
            avaliar com maior precisão qual a melhor conduta de tratamento para
            o paciente.{" "}
          </span>
        </p>
        <p>
          <span>
            Por isso, o cateterismo é amplamente difundido como um exame
            importante no diagnóstico e na definição da melhor conduta de
            tratamento dos pacientes cardiopatas.{" "}
          </span>
        </p>
        <h2>Indicação do Cateterismo Cardíaco</h2>
        <p>
          <span>
            Pessoas com fatores de risco para doença coronariana ou com sintomas
            como dor no peito, após criteriosos exames de estratificação, podem
            ser encaminhadas ao cateterismo para um diagnóstico mais preciso da
            sua condição. Atualmente, o exame é realizado de forma rotineira na
            investigação cardiológica avançada e invasiva. No entanto, a
            determinação da sua necessidade e o encaminhamento do paciente devem
            ficar a critério do cardiologista clínico.
          </span>
        </p>
        <p>
          <span>
            O <strong>Cateterismo</strong> também é indicado na fase aguda do
            infarto do miocárdio, condição em que uma artéria coronária está
            totalmente ocluída. Nesses casos, o exame identifica o local da
            obstrução. Na sequência, é realizada a Angioplastia, procedimento
            que irá restabelecer o fluxo sanguíneo no vaso em questão.
          </span>
        </p>
        <blockquote>
          <p>
            <i>
              <span>
                “O cateterismo também é importante em situações de emergência.
                Com ele, a equipe médica identifica, de forma rápida e precisa,
                a obstrução que provocou o infarto. Com esse diagnóstico, é
                possível executar a intervenção imediata através da
                angioplastia.”&nbsp;– Dr. Maurício Nakashima (CRM-RR 1188)
              </span>
            </i>
          </p>
        </blockquote>
        <h2>Como é o Cateterismo Cardíaco</h2>
        <p>
          <span>
            O cateterismo cardíaco é um exame invasivo, em geral realizado com o
            paciente sedado. É realizado através da introdução de um fino
            cateter nas artérias do braço ou da perna, conduzido até o coração.
            Desta forma, com a ajuda de contraste e de recursos de Raio X, o
            médico consegue visualizar os vasos sanguíneos, identificar e
            avaliar possíveis obstruções, aferir pressões das câmaras cardíacas
            e identificar doenças estruturais.
          </span>
        </p>
        <img
          src="\Catheter.png"
          alt="cateterismo"
          height={400}
          width={"100%"}
        />
        <p>
          <span>
            O exame gera imagens que permitem que os médicos avaliem a
            quantidade e gravidade das obstruções, assim como a anatomia dos
            vasos e das estruturas do coração. Dessa forma, tem condições de
            encaminhar o paciente para o melhor tratamento para o seu caso, seja
            clínico, cirúrgico ou por cateterismo terapêutico (ex: angioplastia,
            valvuloplastia, etc ).
          </span>
        </p>
        <h2>Riscos do Cateterismo</h2>
        <p>
          <span>
            O cateterismo cardíaco não costuma apresentar grandes riscos para os
            pacientes. &nbsp;No entanto, como em qualquer intervenção invasiva,
            algumas complicações podem surgir. Por isso, o exame deve ser feito
            por profissionais especializados e capacitados. É importante também
            que seja realizado em hospitais que ofereçam estrutura cardiológica
            completa. Os médicos e os hospitais devem estar preparados para
            tratar eventuais complicações, caso necessário.
          </span>
        </p>
        <blockquote>
          <p>
            <i>
              <span>
                “A Lifecor conta com duas salas de Hemodinâmica altamente
                equipadas. Tais salas são também preparadas para intervenções
                cirúrgicas, se necessário. Além disso, profissionais
                especializados nas áreas da Cardiologia estão sempre de
                prontidão para o caso de alguma eventualidade.” – Dr. Maurício
                Nakashima (CRM-RR 1188)"{" "}
              </span>
            </i>
          </p>
        </blockquote>
        <p>
          <span>
            Dentre as complicações do cateterismo cardíaco estão hematoma ou
            sangramento no local das punções vasculares, dor local, reações
            alérgicas ao contraste iodado, obstruções arteriais no local das
            punções vasculares, arritmias graves e morte. Felizmente, as três
            últimas complicações, de maior gravidade, são bastante raras e
            ocorrem principalmente em pacientes que são submetidos ao
            cateterismo cardíaco em situação de bastante debilidade física
            ocasionada pela doença. &nbsp;&nbsp;
          </span>
        </p>
        <p>
          <span>
            É fundamental seguir as orientações prévias ao cateterismo cardíaco
            para que o procedimento seja realizado com segurança. Da mesma
            forma, orientações como repouso após o exame, se for o caso, também
            devem ser respeitadas. Assim, a recuperação acontece de forma mais
            rápida e tranquila.
          </span>
        </p>
        <p>
          <i>
            <span>
              *Por Dr. Maurício Nakashima (CRM-RR 1188), Cardiologista
              Hemodinamicista da Lifecor.
            </span>
          </i>
        </p>
      </div>
      <ProcedureList />
      <Footer />
    </CatheterizationContainer>
  );
}

export { Catheterization };
