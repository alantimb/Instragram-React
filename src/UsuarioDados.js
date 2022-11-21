export default function UsuarioDados(props) {
  function perfilImg() {
    const imgLink = prompt(
      "Insera aqui um link válido para a nova imagem de perfil:"
    );

    if (imgLink === " " || imgLink === "") {
      return props.userImg;
    } else {
      return props.setUserImg(imgLink);
    }
  }

  function perfilName() {
    const nameLink = prompt(
      "Insera aqui um link válido para a nova imagem de perfil:"
    );

    if (nameLink === " " || nameLink === "") {
      return props.userName;
    } else {
      return props.setUserName(nameLink);
    }
  }

  return (
    <>
      <div data-test="user" className="usuario">
        <img
          data-test="profile-image"
          src={props.userImg}
          onClick={perfilImg}
        />
        <div className="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {props.userName}
            <ion-icon
              data-test="edit-name"
              name="pencil"
              onClick={perfilName}
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}
