import { FaWhatsapp } from "react-icons/fa";
import { WhatsContainer } from "./styles";

function WhatsApp() {
  return (
    <WhatsContainer>
      <a
        href="https://api.whatsapp.com/send/?phone=559581007912&text=olá, gostaria de tirar algumas dúvidas, pode me ajudar ?&type=phone_number&app_absent=0"
        target="_blank"
      >
        <FaWhatsapp size={40} />
      </a>
    </WhatsContainer>
  );
}

export { WhatsApp };
