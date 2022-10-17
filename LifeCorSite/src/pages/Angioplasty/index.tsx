import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LottieAnimation } from "../../components/LottieAnimations";
import { ProcedureList } from "../../components/ProcedureList";
import { AngioplastyContainer } from "./styles";

import healthLoader from "../../assets/lottie/health-angio.json";

function Angioplasty() {
  return (
    <AngioplastyContainer>
      <Header />
      <div className="container_info">
        <p>
          A angioplastia é uma cirurgia minimamente invasiva que serve para
          desobstruir uma <strong>artéria do coração</strong> que está
          parcialmente ou totalmente entupida. O objetivo do procedimento
          cirúrgico é restabelecer o fluxo sanguíneo normal para a área do
          coração em que a circulação estava comprometida.
        </p>
        <p>
          A angioplastia das artérias coronárias é indicada em casos de{" "}
          <strong>infarto</strong>, quando a artéria está totalmente obstruída e
          precisa ser aberta com urgência. Com o retorno da circulação, o
          músculo cardíaco volta a ser devidamente oxigenado, prevenindo a piora
          do quadro, novo episódio de isquemia, ou evolução para o óbito.
        </p>
        <LottieAnimation
          animation={healthLoader}
          width={"18rem"}
          height={"18rem"}
        />
        <h2>Como é feita a angioplastia?</h2>
        <p>
          Na angioplastia, é introduzido um <strong>cateter</strong> (tubo bem
          fino) na artéria que está obstruída. Na extremidade do cateter existe
          um balão, que dilata o vaso sanguíneo, quando chega na área obstruída,
          permitindo o restabelecimento da circulação.
        </p>
        <figure className="image">
          <span className="img">
            <img
              alt="Cirurgia de angioplastia no tratamento do infarto"
              height="400px"
              src="https://static.medicoresponde.com.br/imagens/img/an/gi/angioplastia_c.jpg"
              width="100%"
            />
          </span>
          <figcaption>Balão na extremidade do cateter</figcaption>
        </figure>
        <p>
          Em alguns casos, além do balão, é feito ainda um implante de uma{" "}
          <strong>rede</strong> ou <strong>malha metálica</strong> (stent), o
          qual mantém o interior desse vaso aberto, para certificar que a
          artéria permaneça com o seu trajeto livre para o fluxo sanguíneo.
        </p>
        <p>
          O tempo de duração da cirurgia de angioplastia varia entre 30 e 45
          minutos. Em algumas situações, a pessoa necessita ficar internada.
        </p>
        <h2>Quais são os riscos da angioplastia?</h2>
        <p>
          O principal risco da angioplastia é a formação de{" "}
          <strong>trombos</strong> na artéria que recebeu o procedimento.
          Contudo, para prevenir essa complicação, são usados medicamentos
          antiagregantes plaquetários, que reduzem o risco de coagulação ou
          formação de placas. O risco de morte como complicação da angioplastia
          é considerado baixíssimo.
        </p>
        <div>
          <div></div>
        </div>
        <p>
          Outro risco da angioplastia é a recorrência do{" "}
          <strong>estreitamento da artéria coronária</strong>, o que pode
          requerer a realização de outra cirurgia. Porém, com o uso das malhas
          metálicas (stents) revestidas com medicamentos, essa complicação
          atualmente ocorre em menos de 10% dos casos.
        </p>
        <h2>Como é o preparo para a angioplastia?</h2>
        <p>
          Além da realização de exames, deve-se evitar tomar medicamentos que
          interferem com a coagulação sanguínea.
        </p>
        <h2>Como é a recuperação da angioplastia?</h2>
        <p>
          Após a angioplastia, a pessoa deve ficar em repouso por algumas horas.
          Nos dias a seguir, os esforços físicos devem ser restringir ao mínimo
          possível.
        </p>
        <p>
          Para evitar novos quadros de obstrução da artéria coronária,
          recomenda-se algumas mudanças no estilo de vida, como não fumar, ter
          uma alimentação equilibrada e saudável e praticar atividade física
          regularmente.
        </p>

        <p>
          O especialista responsável pela realização da angioplastia é o/a
          médico/a cardiologista intervencionista.
        </p>
      </div>
      <ProcedureList />
      <Footer />
    </AngioplastyContainer>
  );
}

export { Angioplasty };
