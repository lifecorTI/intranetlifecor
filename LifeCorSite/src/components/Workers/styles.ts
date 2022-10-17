import styled from "styled-components";

const WorkersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  h1 {
    font-size: 1.7rem;
    color: #000;
  }

  ul {
    display: flex;
    gap: 5px;
    overflow-x: auto;
    padding: 4px;
    width: 90%;
    background: #ccc;
    border-radius: 10px;
    padding-bottom: 20px;
    li {
      display: flex;
      flex-direction: column;
      background: #f3f3f3;

      width: 90%;
      align-items: center;
      padding: 20px;
      border-radius: 5px;
      justify-content: space-evenly;
      gap: 15px;
      border: none;
      min-width: 300px;
      div.photo_container {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 3px;
        background: linear-gradient(45deg, #ff0000, #0000ff);
        img {
          background-color: #fff;
          border-radius: 50%;
          width: 200px;
        }
        svg {
          background-color: #fff;
          border-radius: 50%;
          width: 200px;
          height: 200px;
          padding: 20px;
        }
      }

      h2 {
        color: #000;
        font-size: 1.1rem;
      }

      section {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 4px;
        width: 100%;

        div {
          display: flex;
          width: 100%;
          align-items: center;
          height: 2rem;
          justify-content: center;

          h3 {
            display: flex;
            align-items: center;
            background: #1c1261;
            padding: 6px;
            border-radius: 5px 0 0 5px;
            width: 40%;
            color: #fff;
            font-size: 0.8rem;
            height: 100%;
          }
          p {
            display: flex;
            align-items: center;
            background: #c0c0c0;
            color: #000;
            padding: 6px;
            width: 100%;
            border-radius: 0 5px 5px 0;
            font-size: 0.9rem;
            height: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }

    a {
      cursor: pointer;
      color: #1122ff;
      font-size: 1rem;
      font-weight: 800;
    }
  }
`;

export { WorkersContainer };
