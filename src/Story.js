export default function Story(props) {
  // implementar lógica dos stories mapeados do array

  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src={props.storyImg} />
        </div>
        <div class="usuario">{props.storyName}</div>
      </div>
    </>
  );
}
