export default function Post(props) {
  return (
    <>
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.userImg} />
            {props.userName}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img
            data-test="post-image"
            src={props.postImg}
            onClick={() => {
              {
                props.heartColor !== "red"
                  ? props.setHeartColor("red")
                  : props.setHeartColor("red");
              }
              {
                props.heartColor !== "red"
                  ? props.setHeartName("heart")
                  : props.setHeartName("heart");
              }
            }}
          />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon
                data-test="like-post"
                class={props.heartColor}
                name={props.heartName}
                onClick={() => {
                  {
                    props.heartColor === "red"
                      ? props.setHeartColor("")
                      : props.setHeartColor("red");
                  }
                  {
                    props.heartColor === "red"
                      ? props.setHeartName("heart-outline")
                      : props.setHeartName("heart");
                  }
                }}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                data-test="save-post"
                name={props.bookmarkName}
                onClick={() => {
                  props.bookmarkName === "bookmark-outline"
                    ? props.setBookmarkName("bookmark")
                    : props.setBookmarkName("bookmark-outline");
                }}
              ></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.likesImg} />
            <div data-test="likes-number" className="texto">
              Curtido por <strong>{props.likesName}</strong> e{" "}
              <strong>
                outras{" "}
                {props.heartColor === "red"
                  ? (Number(props.likesNumb) + 0.001).toFixed(3)
                  : props.likesNumb}{" "}
                pessoas
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
