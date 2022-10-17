import styled from "styled-components";

const SliderInfoContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: radial-gradient(
    farthest-corner at 600px 1000px,
    #fdf497,
    #fdf497,
    #fd5949 0%,
    #d6249f 50%,
    #285aeb 100%
  );
  div.carousel-root {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 768px;
  }
  h1 {
    text-align: center;
    font-size: 1.5rem;
    width: 20%;
  }
`;

export { SliderInfoContainer };
