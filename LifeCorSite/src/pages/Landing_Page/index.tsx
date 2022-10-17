import React from "react";

import { ContainerMain } from "./styles";

import { Header } from "../../components/Header";
import { SliderInfo } from "../../components/SliderInfo";
import { Workers } from "../../components/Workers";
import { ProcedureList } from "../../components/ProcedureList";
import { Footer } from "../../components/Footer";
import { WhatsApp } from "../../components/WhatsApp";

function LandingPage() {
  return (
    <ContainerMain>
      <Header />
      <SliderInfo />
      <section className="info_lifeCor">
        <p>
          Nossas instalações contam com equipamento de ponta, e reviões
          periódicas para a segurança da equipe e dos pacientes, e sempre
          utilizamos os melhores materiais hemodinâmicos.
        </p>
      </section>
      <ProcedureList />
      <Workers />
      <WhatsApp />
      <Footer />
    </ContainerMain>
  );
}

export default LandingPage;
