import React from "react";
import Header from "../../components/header";
import { IResponseProcedure } from "./interface";

class OpmePDF extends React.Component<{
  props: IResponseProcedure | undefined;
}> {
  render() {
    const { props } = this.props;

    return (
      <div className="flex flex-col w-full items-center overflow-hidden h-screen max-w-[768px]">
        <div className="bg-bg-lifecor p-10 bg-cover bg-no-repeat w-full text-xs font-thin ">
          <header className="flex flex-col items-center text-xl justify-center">
            <h1>HOSPITAL LOTTY IRIS</h1>
            <h1>FICHA OPME</h1>
          </header>
          <section className="text-base flex flex-col gap-4">
            <div className="flex justify-between">
              <p>DATA: ____ /____ /______ </p>
              <p>HORA: ____:____</p>
            </div>
            <div className="flex justify-between">
              <p>
                PROCEDIMENTO:{" "}
                <strong className="font-black">{props?.name}</strong>
              </p>
              <p>
                ORIGEM: <strong className="font-black">{props?.origin}</strong>
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                NOME:{" "}
                <strong className="font-black">{props?.patient.name}</strong>
              </p>
              <p>
                IDADE:{" "}
                <strong className="font-black">{props?.patient.age}A</strong>
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                CONVÊNIO:{" "}
                <strong className="font-black">
                  {props?.patient.agreement}
                </strong>
              </p>
              <p>
                NASCIMENTO:{" "}
                <strong className="font-black">
                  {props?.patient.birthDate}
                </strong>
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                CPF:{" "}
                <strong className="font-black">{props?.patient.cpf}</strong>
              </p>
              <p>
                RG: <strong className="font-black">{props?.patient.rg}</strong>
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                END:{" "}
                <strong className="font-black">{props?.patient.address}</strong>
              </p>
              <p>
                N°:{" "}
                <strong className="font-black">
                  {props?.patient.houseNumber}
                </strong>
              </p>
            </div>{" "}
            <div className="flex justify-between">
              <p>
                BAIRRO:{" "}
                <strong className="font-black">
                  {props?.patient.district}
                </strong>
              </p>
              <p>
                CIDADE:{" "}
                <strong className="font-black">{props?.patient.city}</strong>
              </p>{" "}
              <p>
                ESTADO:{" "}
                <strong className="font-black">
                  {props?.patient.municipality}
                </strong>
              </p>
            </div>{" "}
            <div className="flex justify-between">
              <p>
                NOME DA MÃE:{" "}
                <strong className="font-black">
                  {props?.patient.motherName}
                </strong>
              </p>{" "}
              <p>
                MEDICO SOLICITANTE:{" "}
                <strong className="font-black">{props?.doctor.name}</strong>
              </p>
            </div>{" "}
          </section>
        </div>
      </div>
    );
  }
}

export default OpmePDF;
