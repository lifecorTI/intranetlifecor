import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: #4422aa;
  color: #fff;
  gap: 50px;
  div {
    display: flex;
    width: 95%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      ul {
        padding: 15px;
        li {
          color: #fff;
        }
      }
    }
  }
`;

export { FooterContainer };
