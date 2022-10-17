import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { LottieAnimation } from "../../../components/LottieAnimations";
import { ProcedureList } from "../../../components/ProcedureList";

import fitnessTracker from "../../../assets/lottie/fitness-tracker.json";
import { ArteriographyOfPartsContainer } from "./styles";

function ArteriographyOfParts() {
  return (
    <ArteriographyOfPartsContainer>
      <Header />
      <div className="content_info">
        <LottieAnimation
          animation={fitnessTracker}
          height={"20rem"}
          width={"20rem"}
        />
        <h2>Arteriografia de membros</h2>

        <p>
          A Arteriografia de membros é um exame minimamente invasivo realizado
          através de punção no braço ou virilha do paciente, por onde é
          introduzido um cateter que auxilia na avaliação da aérea desejada, e
          assim, é possível observar se existe a dilatação ou estreitamento da
          artéria que está sendo examinada. O exame é um grande aliado,
          auxiliando no diagnóstico e na avaliação de aneurismas, aterosclerose
          ou malformações arteriais. O procedimento é capaz de captar imagens
          dos vasos sanguíneos, dessa forma, é possível verificar se existe a
          presença de obstruções ou dilatações, na artéria aorta e em suas
          ramificações na região do abdômen, do tórax, dos braços ou das pernas.
        </p>
      </div>
      <ProcedureList />
      <Footer />
    </ArteriographyOfPartsContainer>
  );
}

export { ArteriographyOfParts };
