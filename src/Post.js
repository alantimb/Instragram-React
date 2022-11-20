import { useState } from "react";

export default function Post(props) {
  const [heartColor, setHeartColor] = useState("");
  const [heartName, setHeartName] = useState("heart-outline");
  const [bookmarkName, setBookmarkName] = useState("bookmark-outline");

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
                heartColor !== "red"
                  ? setHeartColor("red")
                  : setHeartColor("red");
              }
              {
                heartColor !== "red"
                  ? setHeartName("heart")
                  : setHeartName("heart");
              }
            }}
          />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon
                data-test="like-post"
                class={heartColor}
                name={heartName}
                onClick={() => {
                  {
                    heartColor === "red"
                      ? setHeartColor("")
                      : setHeartColor("red");
                  }
                  {
                    heartColor === "red"
                      ? setHeartName("heart-outline")
                      : setHeartName("heart");
                  }
                }}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                data-test="save-post"
                name={bookmarkName}
                onClick={() => {
                  bookmarkName === "bookmark-outline"
                    ? setBookmarkName("bookmark")
                    : setBookmarkName("bookmark-outline");
                }}
              ></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.likesImg} />
            <div className="texto">
              Curtido por <strong>{props.likesName}</strong> e{" "}
              <strong>outras {props.likesNumb} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
