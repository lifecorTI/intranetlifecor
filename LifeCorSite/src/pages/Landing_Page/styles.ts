import styled from "styled-components";

const ContainerMain = styled.div`
  display: flex;
  min-height: 100vh;
  color: ${(props) => props.theme.font_color};
  background: #efefef;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ul {
    color: ${(props) => props.theme.font_color};
  }
  section.info_lifeCor {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 800px;
    width: 100%;
    background: url("/img/hemo.jpg") no-repeat center;
    background-size: cover;
    padding: 20px;
    p {
      font-size: 1rem;
      color: ${(props) => props.theme.procedure.font_color};
      text-shadow: 2px 2px 5px #000000;
      font-weight: 900;
      letter-spacing: 1.1px;
      text-align: center;
      width: 100%;
      max-width: 400px;
    }
  }
`;

export { ContainerMain };
