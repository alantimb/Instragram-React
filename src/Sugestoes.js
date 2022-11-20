import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const sugestElements = [
    { sugImg: `assets/img/bad.vibes.memes.svg`, sugName: `bad.vibes.memes` },
    { sugImg: `assets/img/chibirdart.svg`, sugName: `chibirdart` },
    {
      sugImg: `assets/img/razoesparaacreditar.svg`,
      sugName: `razoesparaacreditar`,
    },
    { sugImg: `assets/img/adorable_animals.svg`, sugName: `adorable_animals` },
    { sugImg: `assets/img/smallcutecats.svg`, sugName: `smallcutecats` },
  ];

  return (
    <>
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestElements.map((item, index) => (
          <Sugestao key={index} sugImg={item.sugImg} sugName={item.sugName} />
        ))}
      </div>
    </>
  );
}
