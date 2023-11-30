import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/tvShows";

const testGetTvShows = async () => {
  const { data } = await axios.get(`${baseUrl}/${mainRoute}`);
  console.log(data);
};

const testCreateTvShows = async () => {
  const tvShows = [
    {
      imgurl:
        "https://img.theflixer.se/xxrz/250x400/682/88/22/8822b3a4f732a28db1d10002e6cecd23/8822b3a4f732a28db1d10002e6cecd23.jpg",
      title: "Game of Thrones",
      episode: { current: 1, total: 30 },
    },
    {
      imgurl:
        "https://img.theflixer.se/xxrz/250x400/682/1a/29/1a290349294683dc2dc4879e2ca13b3d/1a290349294683dc2dc4879e2ca13b3d.jpg",
      title: "The Big Bang Theory",
      episode: { current: 1, total: 30 },
    },

    {
      imgurl:
        "https://img.theflixer.se/xxrz/250x400/682/5b/f9/5bf933d3055d8b9ccc0c1291e1961a46/5bf933d3055d8b9ccc0c1291e1961a46.jpg",
      title: "The Walking Dead",
      episode: { current: 1, total: 30 },
    },
    {
      imgurl:
        "https://img.theflixer.se/xxrz/250x400/682/ed/b9/edb9221b9b5bcec503d6e170b4e151c8/edb9221b9b5bcec503d6e170b4e151c8.jpg",
      title: "Mr. Robot",
      episode: { current: 1, total: 30 },
    },
    {
      imgurl:
        "https://img.theflixer.se/xxrz/250x400/682/7a/78/7a78d2a44e33d64d6c35e1a2c1e2cdc9/7a78d2a44e33d64d6c35e1a2c1e2cdc9.jpg",
      title: "Breaking Bad",
      episode: { current: 1, total: 30 },
    },
    {
      imgurl:
        "https://img.theflixer.se/xxrz/250x400/682/b1/d2/b1d2e52a612cae26e446bd48d0b8dfe1/b1d2e52a612cae26e446bd48d0b8dfe1.jpg",
      title: "Rick and Morty",
      episode: { current: 1, total: 30 },
    },
  ];

  const { data } = await axios.post(
    `${baseUrl}/${mainRoute}/many`,
    tvShows
  );
  console.log(data);
};

const main = async () => {
  try {
    await testGetTvShows();
  } catch (error) {
    console.log(error);
  }
};

main();
