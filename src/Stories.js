import Story from "./Story";

export default function Stories() {
  const storyElements = [
    { storyImg: `assets/img/9gag.svg`, storyName: `9gag` },
    { storyImg: `assets/img/meowed.svg`, storyName: `meowed` },
    { storyImg: `assets/img/barked.svg`, storyName: `barked` },
    {
      storyImg: `assets/img/nathanwpylestrangeplanet.svg`,
      storyName: `nathanwpylestrangeplanet`,
    },
    { storyImg: `assets/img/wawawicomics.svg`, storyName: `wawawicomics` },
    { storyImg: `assets/img/respondeai.svg`, storyName: `respondeai` },
    { storyImg: `assets/img/filomoderna.svg`, storyName: `filomoderna` },
    { storyImg: `assets/img/memeriagourmet.svg`, storyName: `memeriagourmet` },
  ];

  return (
    <>
      <div className="stories">
        {storyElements.map((item, index) => (
          <Story
            key={index}
            storyImg={item.storyImg}
            storyName={item.storyName}
          />
        ))}

        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </>
  );
}
