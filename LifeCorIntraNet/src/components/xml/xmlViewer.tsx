import { NfeModel } from "../../utils/xmlExtract";

type IProps = {
  props: XMLDocument;
};
export default function XML({ props }: IProps) {
  const nfe = NfeModel(props);
  const total = nfe.totalIcmsNota();
  console.log(nfe.totalIcmsNota());
  const emit = props.querySelectorAll("infNFe, InfNfse")[0].childNodes[1];
  const ide = props.querySelectorAll("infNFe, InfNfse")[0].childNodes[0];
  const det = props.querySelectorAll("det");
  const renderEmit = [] as any;
  const renderIde = [] as any;
  const renderDet = [] as any;
  emit.childNodes.forEach((element) => {
    element.childNodes.length > 0
      ? element.childNodes.forEach((children) => {
          renderEmit.push(children.textContent);
        })
      : renderEmit.push(element.textContent);
  });
  ide.childNodes.forEach((element) => {
    element.childNodes.length > 0
      ? element.childNodes.forEach((children) => {
          renderIde.push(children.textContent);
        })
      : renderIde.push(element.textContent);
  });

  det.forEach((element) => {
    const productMount = {} as any;
    const rastro = [] as any[];

    element.querySelectorAll("rastro").forEach((element) =>
      rastro.push({
        lot: element.childNodes[0].textContent,
        qtd: element.childNodes[1].textContent,
        fab: element.childNodes[2].textContent,
        val: element.childNodes[3].textContent,
      })
    );

    productMount["rastro"] = rastro;

    element.childNodes.forEach((children) => {
      children.childNodes.length > 1
        ? children.childNodes.forEach((leaf) => {
            leaf.childNodes.length > 1
              ? leaf.childNodes.forEach((leafElement) => {
                  productMount[leafElement.nodeName] = leafElement.textContent;
                })
              : (productMount[leaf.nodeName] = leaf.textContent);
          })
        : (productMount[children.nodeName] = children.textContent);
    });

    renderDet.push(productMount);
  });

  return (
    <ul className="bg-white p-5 text-black flex flex-col mt-3">
      <li className="flex gap-4 flex-col">
        <div className="flex gap-10">
          <p>Fornecedor: {renderEmit[2]}</p>
          <p>Natureza: {renderIde[2]}</p>
          <p>Data Emissão: {new Date(renderIde[6]).toLocaleString("pt-br")}</p>
          <p>Valor NF: {total.vNF}</p>
        </div>
        <span>Produtos</span>
        <ul className="flex flex-col">
          {renderDet.map((element: any, i: number) => {
            return (
              <li key={i}>
                {element.xProd}
                <ul className="flex flex-col">
                  {element.rastro.length > 0 ? (
                    element.rastro.map((e: any, i: number) => {
                      return (
                        <li key={i}>
                          Lote: {e.lot} - Quantidade:{" "}
                          {parseInt(element.qCom, 10)} - {element.uCom} -
                          Validade:{" "}
                          {
                            new Date(e.val)
                              .toLocaleString("pt-BR")
                              .split(" ")[0]
                          }
                        </li>
                      );
                    })
                  ) : (
                    <>
                      {" "}
                      Quantidade: {parseInt(element.qCom, 10)} - {element.uCom}
                    </>
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
