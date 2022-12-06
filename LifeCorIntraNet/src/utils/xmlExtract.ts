import { totalICMS } from "../interfaces/utils";

export function NfeModel(xml: XMLDocument) {
  return {
    dataHoraRecebimento: function () {
      return xml.querySelectorAll("dhRecbto")[0].textContent;
    },

    protocolo: function () {
      return xml.querySelectorAll("nProt")[0].textContent;
    },

    chave: function () {
      return xml.querySelectorAll("infNFe")[0].attributes.getNamedItem("Id")
        ?.textContent;
    },

    tipoAmbiente: function () {
      return xml.querySelectorAll("tpAmb")[0].textContent;
    },

    codigoStatusResposta: function () {
      return xml.querySelectorAll("cStat")[0].textContent;
    },

    dataEmissao: function () {
      return xml.querySelectorAll("dhEmi , dEmi")[0].textContent;
    },

    dataEntradaSaida: function () {
      var dt = xml.querySelectorAll("dhSaiEnt, dSaiEnt")[0].textContent;
      if (dt) {
        return dt;
      }
      return "";
    },

    nrNota: function () {
      return xml.querySelectorAll("nNF")[0].textContent;
    },

    naturezaOperacao: function () {
      return xml.querySelectorAll("natOp")[0].textContent;
    },

    tipoOperacao: function () {
      return xml.querySelectorAll("tpNF")[0].textContent as string;
    },

    operacao: function () {
      var tipo = {
        "0": "entrada",
        "1": "saída",
      } as any;
      return tipo[this.tipoOperacao()];
    },

    nome: function () {
      return xml.querySelectorAll("xnome")[0].textContent;
    },

    fantasia: function () {
      return xml.querySelectorAll("xFant")[0].textContent;
    },

    enderecoEmit: function () {
      const enderDest = {} as any;
      xml.querySelectorAll("enderEmit").forEach((element) => {
        element.childNodes.forEach((e) => {
          enderDest[e.nodeName] = e.textContent;
        });
      });
      return enderDest;
    },
    enderecoDest: function () {
      const enderDest = {} as any;
      xml.querySelectorAll("enderDest").forEach((element) => {
        element.childNodes.forEach((e) => {
          enderDest[e.nodeName] = e.textContent;
        });
      });
      return enderDest;
    },

    cpfOrCnpjEmit: function () {
      return (
        xml.querySelectorAll("emit > CNPJ")[0].textContent ||
        xml.querySelectorAll("emit > CPF")[0].textContent
      );
    },

    cpfOrCnpjDest: function () {
      return xml.querySelectorAll("dest > CNPJ").length
        ? xml.querySelectorAll("dest > CNPJ")[0].textContent
        : xml.querySelectorAll("dest > CPF")[0].textContent;
    },

    inscricaoMunicipal: function () {
      return xml.querySelectorAll("emit > IM").length
        ? xml.querySelectorAll("emit > IM")[0].textContent
        : null;
    },

    inscricaoEstadual: function () {
      return xml.querySelectorAll("IE")[0].textContent;
    },

    inscricaoEstadualST: function () {
      return xml.querySelectorAll("IEST").length
        ? xml.querySelectorAll("IEST")[0].textContent
        : null;
    },

    codigoRegimeTributario: function () {
      return xml.querySelectorAll("CRT")[0].textContent;
    },

    informacoesProtocolo: function () {
      const regAnv = [] as any;

      xml.querySelectorAll("infProt").forEach((element) => {
        const infoProtocolo = {} as any;
        element.childNodes.forEach(
          (e) => (infoProtocolo[e.nodeName] = e.textContent)
        );
        regAnv.push(infoProtocolo);
      });

      return regAnv;
    },

    identificacaoNFe: function () {
      const ideJson = {} as any;
      xml.querySelectorAll("ide").forEach((element) => {
        element.childNodes.forEach((e) => {
          ideJson[e.nodeName] = e.textContent;
        });
      });
      return ideJson;
    },

    informacoesComplementares: function () {
      return xml.querySelectorAll("infCpl")[0].textContent;
    },

    informacoesFisco: function () {
      return xml.querySelectorAll("infAdFisco").length
        ? xml.querySelectorAll("infAdFisco")[0].textContent
        : null;
    },

    nrObservacoes: function () {
      return xml.querySelectorAll("obsCont").length;
    },

    observacao: function () {
      return xml.querySelectorAll("obsCont").length
        ? xml.querySelectorAll("obsCont")[0].textContent
        : null;
    },

    texto: function () {
      return xml.querySelectorAll("xTexto").length
        ? xml.querySelectorAll("xTexto")[0].textContent
        : null;
    },

    campoObservacao: function () {
      return xml.querySelectorAll("obsCont,xCampo").length
        ? xml.querySelectorAll("obsCont,xCampo")[0].textContent
        : null;
    },

    serie: function () {
      return xml.querySelectorAll("serie")[0].textContent;
    },

    modelo: function () {
      return xml.querySelectorAll("mod")[0].textContent;
    },

    nrItens: function () {
      return xml.querySelectorAll("det").length;
    },

    item: function () {
      const items = [] as any;

      xml.querySelectorAll("det > prod").forEach((element) => {
        const item = {} as any;
        element.childNodes.forEach((e) => {
          item[e.nodeName] = e.textContent;

          if (e.nodeName === "rastro") {
            item[e.nodeName] = {
              lot: e.childNodes[0].textContent,
              qtd: e.childNodes[1].textContent,
              fab: e.childNodes[2].textContent,
              val: e.childNodes[3].textContent,
            };
          }
        });

        items.push(item);
      });
      return items;
    },

    informacoesProduto: function () {
      const infAdArray = [] as any;
      xml.querySelectorAll("infAdProd").forEach((element) => {
        const infAdProd = {} as any;
        element.childNodes.forEach((e) => {
          infAdProd["infoProd"] = e.textContent;
        });
        infAdArray.push(infAdProd);
      });

      return infAdArray;
    },

    modalidadeFrete: function () {
      return xml.querySelectorAll("modFrete")[0].textContent as string;
    },

    modalidadeFreteTexto: function () {
      var modalidades = {
        0: "EMITENTE",
        1: "DESTINATARIO",
        2: "TERCEIROS",
        9: "SEM FRETE",
      } as any;
      return modalidades[this.modalidadeFrete()];
    },

    transportador: function () {
      const transport = {} as any;
      xml.querySelectorAll("transporta").forEach((element) => {
        element.childNodes.forEach((e) => {
          transport[e.nodeName] = e.textContent;
        });
      });
      return transport;
    },

    quantidadeVolumes: function () {
      return xml.querySelectorAll("qVol").length > 0
        ? xml.querySelectorAll("qVol")[0].textContent
        : null;
    },

    especie: function () {
      return xml.querySelectorAll("esp").length > 0
        ? xml.querySelectorAll("esp")[0].textContent
        : null;
    },

    marca: function () {
      return xml.querySelectorAll("marca").length > 0
        ? xml.querySelectorAll("marca")[0].textContent
        : null;
    },

    numeracao: function () {
      return xml.querySelectorAll("nVol").length > 0
        ? xml.querySelectorAll("nVol")[0].textContent
        : null;
    },

    pesoLiquido: function () {
      return xml.querySelectorAll("pesoL").length > 0
        ? xml.querySelectorAll("pesoL")[0].textContent
        : null;
    },

    pesoBruto: function () {
      return xml.querySelectorAll("pesoB").length > 0
        ? xml.querySelectorAll("pesoB")[0].textContent
        : null;
    },

    totalIcmsNota: function () {
      const ICMSTot = {} as any;
      xml.querySelectorAll("ICMSTot").forEach((element) => {
        element.childNodes.forEach((e) => {
          ICMSTot[e.nodeName] = e.textContent;
        });
      });
      return ICMSTot as totalICMS;
    },

    servico: function () {
      return xml.querySelectorAll("ISSQNtot");
    },

    valorTotalISS: function () {
      return xml.querySelectorAll("vISS");
    },

    valorTotalServicoNaoIncidente: function () {
      return xml.querySelectorAll("vServ");
    },

    cobranca: function () {
      return xml.querySelectorAll("cobr");
    },

    numeroDuplicata: function () {
      return xml.querySelectorAll("nDup");
    },

    valorDuplicata: function () {
      return xml.querySelectorAll("vDup");
    },

    /*
   : function()   {
      return xml.querySelectorAll('marca');
    },
   : function()   {
      return xml.querySelectorAll('marca');
    },
   : function()   {
      return xml.querySelectorAll('marca');
    },
   : function()   {
      return xml.querySelectorAll('marca');
    },
  */
  };
}
