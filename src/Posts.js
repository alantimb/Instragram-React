import Post from "./Post";
import { useState } from "react";

export default function Posts() {
  const postsElements = [
    {
      userImg: `assets/img/meowed.svg`,
      userName: `meowed`,
      postImg: `assets/img/gato-telefone.svg`,
      likesImg: `assets/img/respondeai.svg`,
      likesName: `respondeai`,
      likesNumb: `101.523`,
    },
    {
      userImg: `assets/img/barked.svg`,
      userName: `barked`,
      postImg: `assets/img/dog.svg`,
      likesImg: `assets/img/adorable_animals.svg`,
      likesName: `adorable_animals`,
      likesNumb: `99.159`,
    },
  ];

  const [heartColor, setHeartColor] = useState("");
  const [heartName, setHeartName] = useState("heart-outline");
  const [bookmarkName, setBookmarkName] = useState("bookmark-outline");

  return (
    <>
      <div data-test="post" className="posts">
        {postsElements.map((item, index) => (
          <Post
            key={index}
            userImg={item.userImg}
            userName={item.userName}
            postImg={item.postImg}
            likesImg={item.likesImg}
            likesName={item.likesName}
            likesNumb={item.likesNumb}
            heartColor={heartColor}
            setHeartColor={setHeartColor}
            heartName={heartName}
            setHeartName={setHeartName}
            bookmarkName={bookmarkName}
            setBookmarkName={setBookmarkName}
          />
        ))}
      </div>
    </>
  );
}
