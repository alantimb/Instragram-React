export default function UsuarioDados(props) {
  return (
    <>
      <div data-test="user" className="usuario">
        <img
          data-test="profile-image"
          src={props.userImg}
          onClick={() =>
            props.setUserImg(
              prompt("Insera aqui um link válido para a nova imagem de perfil:")
            )
          }
        />
        <div className="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {props.userName}
            <ion-icon
              data-test="edit-name"
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
