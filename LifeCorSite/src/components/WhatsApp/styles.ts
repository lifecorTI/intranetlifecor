import styled from "styled-components";

const WhatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;

  a {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    svg:nth-child(1) {
      color: #0f0;
    }
    font-weight: 600;
    width: 50px;
    transition: width 1s;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.9rem;
    &:hover {
      width: 110px;

      ::after {
        content: "Whats App";
      }
    }

    @media screen and (max-width: 768px) {
      &:hover {
        width: 40px;
        ::after {
          content: "";
        }
      }
    }
  }

  &:hover {
    background-color: rgb(0, 0, 0, 0.9);
    color: #fff;
  }
`;

export { WhatsContainer };
