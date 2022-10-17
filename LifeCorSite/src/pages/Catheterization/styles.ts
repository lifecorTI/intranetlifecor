import styled from "styled-components";

const CatheterizationContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    farthest-corner at 100px 200px,
    #fdf497,
    #fdf497,
    #fd5949 0%,
    #d6249f 50%,
    #285aeb 100%
  );
  div.container_info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    background: #ffffff;
    margin-top: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    display: flex;
    padding: 50px 50px;
    gap: 40px;
    align-items: center;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
      text-align: justify;

      span {
        font-weight: 400;
        line-height: 40px;
      }
    }
    img {
      max-width: 600px;
    }
  }
`;

export { CatheterizationContainer };
