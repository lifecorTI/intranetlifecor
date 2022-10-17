import styled from "styled-components";

const ProcedureContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: url("/wallpaper_procedure.png") no-repeat center;
  background-size: cover;
  padding: 100px 0 100px 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h2 {
      font-size: 1.5rem;
      color: #fff;
    }
    span {
      font-size: 1rem;
      color: #fff;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 20px;
      justify-content: center;
      align-items: center;

      li {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        font-size: 1.3rem;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 10px;
        width: 100%;
        max-width: 400px;
        height: 200px;
        color: #fff;
        border-radius: 10px;
        justify-content: space-between;

        p {
          font-size: 1.1rem;
          color: #fff;
        }

        div {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
        }

        a {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          cursor: pointer;
          font-size: 1rem;
          &:hover {
            color: #0000ff;
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

export { ProcedureContainer };
