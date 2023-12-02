import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/tvShows";

const testGetTvShows = async () => {
  const { data } = await axios.get(`${baseUrl}/${mainRoute}`);
  console.log(data);
};

const testGetDiscover = async () => {
  const { data } = await axios.get(
    `${baseUrl}/${mainRoute}/query/discover`
  );

  console.log(data);
};

const testGetTvDetail = async () => {
  const { data } = await axios.post(
    `${baseUrl}/${mainRoute}/query/tv_detail`,
    { tvId: "656a755c68a69f08352996db" }
  );
  console.log({
    data,
    episodesInfos: data.dataResult.tvInfo.episodesInfos,
  });
};
const testCreateTvShows = async () => {
  const tvShows = [
    {
      coverUrl:
        "https://img.theflixer.se/xxrz/250x400/682/88/22/8822b3a4f732a28db1d10002e6cecd23/8822b3a4f732a28db1d10002e6cecd23.jpg",
      title: "Game of Thrones",
      desc: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones.",
      episodesCount: 30,
    },
    {
      coverUrl:
        "https://img.theflixer.se/xxrz/250x400/682/1a/29/1a290349294683dc2dc4879e2ca13b3d/1a290349294683dc2dc4879e2ca13b3d.jpg",
      title: "The Big Bang Theory",
      desc: "The Big Bang Theory is an American television sitcom that aired for 12 seasons, from 2007 to 2019. It follows the lives of a group of brilliant but socially awkward scientists, Leonard Hofstadter and Sheldon Cooper, as they navigate the complexities of love, friendship, and careers in the world of theoretical physics. Their lives become even more complicated when Penny, a beautiful and outgoing actress,",

      episodesCount: 30,
    },

    {
      coverUrl:
        "https://img.theflixer.se/xxrz/250x400/682/5b/f9/5bf933d3055d8b9ccc0c1291e1961a46/5bf933d3055d8b9ccc0c1291e1961a46.jpg",
      title: "The Walking Dead",
      desc: "The Walking Dead is an American post-apocalyptic horror drama television series based on the comic book series of the same name by Robert Kirkman. Set in the wake of a zombie apocalypse, the series follows a group of survivors as they travel across the United States in search of a safe haven.",
      episodesCount: 30,
    },
    {
      coverUrl:
        "https://img.theflixer.se/xxrz/250x400/682/ed/b9/edb9221b9b5bcec503d6e170b4e151c8/edb9221b9b5bcec503d6e170b4e151c8.jpg",
      title: "Mr. Robot",
      desc: "Mr. Robot is a critically acclaimed American television thriller series that delves into the world of hacking, social anxiety, and mental health. The show follows Elliot Alderson, a brilliant but troubled young programmer who works as a cybersecurity engineer by day and a vigilante hacker by night. He suffers from social anxiety disorder, clinical depression, and dissociative identity disorder, which manifests as the mysterious Mr. Robot, a charismatic hacker who recruits Elliot to join his team of anti-capitalist hackers known as fsociety.",
      episodesCount: 30,
    },
    {
      coverUrl:
        "https://img.theflixer.se/xxrz/250x400/682/7a/78/7a78d2a44e33d64d6c35e1a2c1e2cdc9/7a78d2a44e33d64d6c35e1a2c1e2cdc9.jpg",
      title: "Breaking Bad",
      desc: "Breaking Bad is a critically acclaimed American television drama series created by Vince Gilligan. It follows Walter White (Bryan Cranston), a struggling high school chemistry teacher diagnosed with terminal lung cancer. To secure his family's future financially, he partners with his former student Jesse Pinkman (Aaron Paul) to produce and sell crystal meth.",
      episodesCount: 30,
    },
    {
      coverUrl:
        "https://img.theflixer.se/xxrz/250x400/682/b1/d2/b1d2e52a612cae26e446bd48d0b8dfe1/b1d2e52a612cae26e446bd48d0b8dfe1.jpg",
      title: "Rick and Morty",
      desc: "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his easily distressed grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer.",
      episodesCount: 30,
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
    await testGetTvDetail();
  } catch (error) {
    console.log(error);
  }
};

main();
