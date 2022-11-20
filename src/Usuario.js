import UsuarioDados from "./UsuarioDados";
import { useState } from "react";

export default function Usuario() {
  // implementar lógica de alteração dos dados do usuário
  const [userName, setUserName] = useState("Catana");
  const [userImg, setUserImg] = useState("assets/img/catanacomics.svg");

  return (
    <UsuarioDados
      userName={userName}
      setUserName={setUserName}
      userImg={userImg}
      setUserImg={setUserImg}
    />
  );
}
