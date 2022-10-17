import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { LottieAnimation } from "../../../components/LottieAnimations";
import { ProcedureList } from "../../../components/ProcedureList";

import cardiologyAnalysis from "../../../assets/lottie/cardiology-analysis.json";
import { ArteriographyAbdominalAndThoracicContainer } from "./styles";

function ArteriographyThoracicAndAbdominal() {
  return (
    <ArteriographyAbdominalAndThoracicContainer>
      <Header />
      <div className="content_info">
        <p>
          <strong>Aortografia </strong>é um dos métodos inovadores que permitem
          aos médicos examinar a condição da aorta. A essência da manipulação é
          o fornecimento de fluido de contraste na cavidade do vaso com a
          condução paralela de uma série de fotografias de raios-X. As imagens
          resultantes, após o procedimento, permanecem na memória eletrônica do
          computador, permitindo que elas funcionem repetidamente com elas.
        </p>{" "}
        <LottieAnimation
          animation={cardiologyAnalysis}
          height={"20rem"}
          width={"20rem"}
        />
        <h2>Métodos de aortografia abdominal</h2>
        <p>
          Muitos pacientes, antes de passar por esse ou esse procedimento,
          aspiram a aprender mais sobre a natureza de sua conduta, a natureza
          informativa do método e a confiabilidade dos resultados obtidos. O
          estudo da região abdominal de um dos grandes vasos é realizado para
          revelar alterações patológicas que afetam tanto a aorta como os órgãos
          internos adjacentes. Pode ser um fígado, um intestino, uma gravidez,
          órgãos de uma pequena bacia ou rins. A técnica de aortografia
          abdominal é simples. Uma preparação de contraste de raios-x é dada,
          para este tipo de exame, na artéria axilar ou femoral. Esta substância
          é inerte e não prejudica o corpo do paciente que está sendo examinado.
          A técnica invasiva consiste em três etapas: O procedimento é realizado
          em posição propensa. O paciente é fixado na mesa, pois deve permanecer
          parado durante todo o exame. Somente neste caso, é possível obter uma
          alta precisão do resultado. Inicialmente, o paciente é anestesiado. O
          local de inserção do cateter é sanitizado e é feita uma pequena
          incisão do recipiente desejado, através da qual é inserido suavemente
          no vaso sanguíneo. Um cateter é um tubo médico especial feito de
          plástico. É gradualmente promovido ao longo do curso do vaso
          sanguíneo. O médico tem a oportunidade de seguir todo o procedimento
          com a ajuda da televisão de raios-X, que está equipada com o
          dispositivo. Após a conclusão da introdução, o especialista começa a
          alimentar o tubo com uma substância de contraste de raios-X, em
          paralelo, realiza-se uma pesquisa relâmpago, dando uma série de
          fotografias de raios-X. Durante a introdução do medicamento, o
          paciente pode sentir o calor recebido. O fluido de contraste é
          alimentado no corpo duas a quatro vezes (conforme necessário). Após o
          exame, o cateter é cuidadosamente removido. O local de sua introdução
          é fixado por um curativo ou é apertado de outra forma. Isso irá parar
          o sangramento. Após um quarto de hora, uma bandagem estéril apertada é
          aplicada na área danificada. Este método permite reconhecer doenças
          tão graves como neoplasmas hipervasculares nos rins, metástases
          hepáticas, inflamação que ocorre nas partes inferiores do trato
          gastrointestinal. Existem também métodos não-invasivos deste estudo: A
          angiografia por ressonância magnética permite determinar as
          características anatômicas eo nível de funcionamento do vaso sanguíneo
          que está sendo examinado. A angiografia por tomografia computadorizada
          permite ao especialista obter uma imagem muito precisa da localização
          e condição do vaso sanguíneo. Aortografia abdominal é realizada
          principalmente para a investigação e diferenciação de doenças dos
          rins, bexiga, intestino, rins, baço e útero. Aortografia Abdominal é
          um método bastante informativo de reconhecimento da localização da
          placenta prévia. Este procedimento permite-lhe diagnosticar a presença
          de várias anomalias, policisstases, presença de cistos solitários no
          corpo, reconhecimento da pielonefrite, neoplasias malignas
          hipernaroides, hidronefrose e outras alterações patológicas.
        </p>
        <h2>Indicações para aortografia abdominal</h2>
        <p>
          Como ficou claro, o estudo neste artigo é atribuído pelo médico
          assistente no caso de uma necessidade de examinar a condição dos vasos
          sanguíneos e, em particular, a aorta. Que o médico nomeou ou nomeou
          esta pesquisa, a presença das indicações para a realização de uma
          aortografia abdominal é necessária. Para esses médicos, incluem:
          Aneurisma (expansão local patológica do vaso sanguíneo) da aorta. A
          coarctação é uma doença do desenvolvimento que consiste em restringir
          ou fechar completamente o lúmen aórtico. Suspeita de sangramento
          interno. Doença cardíaca congênita, na qual o ducto arterial (ducto de
          Botallov) não se sobrepõe ao recém-nascido após a sua nasçao. Estenose
          da boca do vaso sanguíneo - um estreitamento da passagem da válvula
          aórtica, levando a uma falha na norma do fluxo sanguíneo do ventrículo
          esquerdo do coração para a aorta. Patologia na localização do arco
          aórtico. Mudanças patológicas no arco do vaso sanguíneo, que levaram a
          um bloqueio completo da passagem. Disfunção da válvula aórtica.
          Violação da integridade dos órgãos abdominais, resultante de trauma ou
          doença crônica. Diferenciação do diagnóstico de neoplasia de
          mediastino e aneurisma aórtico. Suspeita de um tumor benigno ou
          maligno. A patologia do espaço retroperitoneal. A necessidade de
          esclarecer a localização das mudanças negativas na aorta no período de
          preparação para intervenção cirúrgica.
        </p>
        <h2>Aortografia do Peito</h2>
        <p>
          Se o médico tratante tem uma suspeita de um processo patológico que se
          desenvolve no corpo do paciente que afeta a parte torácica da aorta,
          torna-se necessário confirmar ou refutar essa suposição. Neste caso,
          uma aortografia torácica é atribuída a um especialista como paciente.
          Este estudo permite que você reconheça: Um aneurisma de um vaso
          sanguíneo que se desenvolve na aorta torácica. Desenvolvimento de
          coarctação na área de interesse. Disfunção da válvula aórtica. Outras
          anomalias do seu desenvolvimento.
        </p>
      </div>

      <ProcedureList />

      <Footer />
    </ArteriographyAbdominalAndThoracicContainer>
  );
}

export { ArteriographyThoracicAndAbdominal };
