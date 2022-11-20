import Post from "./Post";

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

  return (
    <>
      <div class="posts">
        {postsElements.map((item) => (
          <Post
            userImg={item.userImg}
            userName={item.userName}
            postImg={item.postImg}
            likesImg={item.likesImg}
            likesName={item.likesName}
            likesNumb={item.likesNumb}
          />
        ))}
      </div>
    </>
  );
}
