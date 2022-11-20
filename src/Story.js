export default function Story(props) {
  // implementar lógica dos stories mapeados do array

  return (
    <>
      <div className="story">
        <div className="imagem">
          <img src={props.storyImg} />
        </div>
        <div className="usuario">{props.storyName}</div>
      </div>
    </>
  );
}
