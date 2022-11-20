export default function UsuarioDados(props) {
  return (
    <>
      <div class="usuario">
        <img
          src={props.userImg}
          onClick={() =>
            props.setUserImg(
              prompt("Insera aqui um link válido para a nova imagem de perfil:")
            )
          }
        />
        <div class="texto">
          <strong>catanacomics</strong>
          <span>
            {props.userName}
            <ion-icon
              name="pencil"
              onClick={() =>
                props.setUserName(
                  prompt("Qual nome de usuário deseja inserir?")
                )
              }
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}
