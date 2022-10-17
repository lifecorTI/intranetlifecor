import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1rem;
  width: 100%;
  background: #efefef;

  div.logo {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img.cor {
      height: 3rem;
      // animation: <animation-name> <animation-duration> <animation-iteration-count>
      animation: animateHeart 1.2s infinite;
    }

    img.lifeCor {
      height: 3rem;
    }
  }

  nav.navigate {
    display: flex;
    gap: 20px;
    font-size: 1rem;
    a {
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      svg:nth-child(1) {
        color: #0f0;
      }
      svg:nth-child(2) {
        fill: url("#instagram");
      }
    }
  }

  @keyframes animateHeart {
    // scale down and scale up faster in irregular intervals to get the throbbing effect
    0% {
      transform: scale(0.8);
    }
    5% {
      transform: scale(0.9);
    }
    10% {
      transform: scale(0.8);
    }
    15% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

export { ContainerHeader };
