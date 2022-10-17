import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { LottieAnimation } from "../../../components/LottieAnimations";
import { ProcedureList } from "../../../components/ProcedureList";

import mriExam from "../../../assets/lottie/mri-exam.json";
import { CarotidAndVertebralContainer } from "./styles";

function CarotidAndVertebral() {
  return (
    <CarotidAndVertebralContainer>
      <Header />
      <div className="content_info">
        <LottieAnimation animation={mriExam} height={"20rem"} width={"30rem"} />
        <h2>Artériografia das carótidas e vertebrais</h2>
        <p>
          A artériografia da carótidas e vertebrais é um exame que tem por
          objetivos o estudo da vascularização das principais artérias que levam
          sangue em direção ao cérebro. É possível também identificar as placas
          de gordura que se desenvolvem no interior das artérias
          (aterosclerose), quantificar a obstrução e medir a espessura da parede
          da artéria. Estas informações são utilizadas para a avaliação de risco
          para o desenvolvimento de problemas cardíacos como o infarto agudo do
          miocárdio (IAM) e o acidente vascular cerebral (AVC). A doença
          cardíaca (infarto) e o AVC quando somadas representam a principal
          causa de morte em homens e mulheres no Brasil e no mundo, sendo mais
          comum que a somatória de todos os tipos de câncer. O Doppler de
          carótidas e vertebrais permite identificar pessoas com risco para o
          desenvolvimento destas doenças.
        </p>
      </div>
      <ProcedureList />
      <Footer />
    </CarotidAndVertebralContainer>
  );
}

export { CarotidAndVertebral };
