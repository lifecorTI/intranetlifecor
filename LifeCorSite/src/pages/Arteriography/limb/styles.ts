import styled from "styled-components";

const ArteriographyOfPartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    farthest-corner at 100px 200px,
    #fdf497,
    #fdf497,
    #fd5949 0%,
    #d6249f 50%,
    #285aeb 100%
  );

  div.content_info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 768px;
    background: #ffffff;
    margin-top: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    margin-top: 16px;
    margin-bottom: 16px;

    display: flex;
    padding: 20px 20px;
    align-items: center;
    h2 {
      font-size: 1.5rem;
      margin-top: 32px;
    }
    p {
      font-size: 1.2rem;
      text-align: justify;
      line-height: 40px;
      font-weight: 400;
    }
  }
`;

export { ArteriographyOfPartsContainer };
