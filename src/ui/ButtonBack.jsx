import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

const BackButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  z-index: 15;
  position: fixed;
`;

function ButtonBack({ handleBack }) {
  return (
    <IconContext.Provider
      value={{ style: { color: "var(--lila-icon)", fontSize: "30px" } }}
    >
      <BackButton onClick={handleBack}>
        <IoChevronBack />
      </BackButton>
    </IconContext.Provider>
  );
}

export default ButtonBack;
