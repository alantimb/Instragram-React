import Story from "./Story";
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
export default function Stories() {
  return (
    <>
      <div class="stories">
        {storyElements.map((item) => (
          <Story storyImg={item.storyImg} storyName={item.storyName} />
        ))}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </>
  );
}
