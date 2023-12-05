import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/episodes";

const testGetEpisodes = async () => {
  const { data } = await axios.get(`${baseUrl}/${mainRoute}`);
  console.log(data);
};

const testCreateEpisodes = async () => {
  const Episodes = [
    {
      videoUrl:
        "https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4",
      tvId: "656a755c68a69f08352996db",
      duration: 300000,
      title: "",
      isLock: false,
      coverUrl: "",
      price: 99,
      likeCount: 9999,
      userUnlock: true,
      userLike: false,
    },
    {
      videoUrl:
        "https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4",
      tvId: "656a755c68a69f08352996db",
      duration: 300000,
      title: "",
      isLock: false,
      coverUrl: "",
      price: 99,
      likeCount: 9999,
      userUnlock: true,
      userLike: false,
    },
    {
      videoUrl:
        "https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4",
      tvId: "656a755c68a69f08352996db",
      duration: 300000,
      title: "",
      isLock: true,
      coverUrl: "",
      price: 99,
      likeCount: 9999,
      userUnlock: false,
      userLike: false,
    },

    {
      videoUrl:
        "https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4",
      tvId: "656a755c68a69f08352996db",
      duration: 300000,
      title: "",
      isLock: true,
      coverUrl: "",
      price: 99,
      likeCount: 9999,
      userUnlock: false,
      userLike: false,
    },
  ];

  const { data } = await axios.post(
    `${baseUrl}/${mainRoute}/many`,
    Episodes
  );
  console.log(data);
};

const main = async () => {
  try {
    await testCreateEpisodes();
  } catch (error) {
    console.log(error);
  }
};

main();
