import React from "react";
import { IResponseProcedure } from "./interface";

class ProcedurePDF extends React.Component<{
  props: IResponseProcedure | undefined;
}> {
  render() {
    const { props } = this.props;

    return (
      <div className="flex flex-col w-full items-center overflow-hidden max-w-[768px]">
        <div className="bg-bg-lifecor p-10 bg-contain bg-no-repeat w-full text-xs font-thin ">
          <section className="flex flex-col gap-2 text-sm">
            <header className="flex flex-col items-center text-xl justify-center">
              <h1>HOSPITAL LOTTY IRIS</h1>
              <h1>FICHA PRONTO ATENDIMENTO</h1>
            </header>
            <div className="flex justify-between">
              <p>DATA: ____ /____ /______ </p>
              <p>HORA: ____:____</p>
            </div>
            <div className="flex justify-between">
              <p className="font-thin">
                PROCEDIMENTO:{" "}
                <strong className="font-black">{props?.name}</strong>
              </p>
              <p>
                ORIGEM: <strong className="font-black">{props?.origin}</strong>
              </p>
            </div>
            <div className="flex justify-between ">
              <p>
                NOME:{" "}
                <strong className="font-black">{props?.patient.name}</strong>
              </p>
              <p>
                IDADE:{" "}
                <strong className="font-black">{props?.patient.age}A</strong>
              </p>
            </div>
            <div className="flex justify-between ">
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
            <div className="flex justify-between ">
              <p>
                CPF:{" "}
                <strong className="font-black">{props?.patient.cpf}</strong>
              </p>
              <p>
                RG: <strong className="font-black">{props?.patient.rg}</strong>
              </p>
            </div>
            <div className="flex justify-between ">
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
            <div className="flex justify-between ">
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
            <div className="flex justify-between ">
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
            <div>
              <p className="">ALERGIA: (___)NEGA (___)POSSUI:</p>{" "}
              <p className="">COMORBIDADE: (___)NEGA (___)POSSUI:</p>
            </div>{" "}
          </section>
          <table className="w-full   flex flex-col mt-10">
            <tr className="flex flex-col items-start border">
              <th>1. SINAIS VITAIS:</th>
              <td>SPO2_______ALTURA________</td>
              <td>
                TEMPERATURA:______PULSO:____ P.A:________F.R:____
                DEXTRO:_________PESO:__________
              </td>
            </tr>
            <tr className="flex flex-col items-start border h-[170px]">
              <th>2. ANAMNESE:</th>
            </tr>
            <tr className="flex flex-col items-start border h-[120px]">
              <th>3. EXAME FÍSICO:</th>
            </tr>
            <tr className="flex flex-col items-start border h-[100px]">
              <th>4. H.D:</th>
            </tr>{" "}
            <tr className="flex flex-col items-start border h-[100px]">
              <th>5. CONDUTA:</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ProcedurePDF;
