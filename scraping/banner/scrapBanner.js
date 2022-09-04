import cheerio from "cheerio";

export const scrapBanner = (html) => {
  const mainWrapper = "a";
  const sourceSelector = "source";
  const imgSelector = "img";

  const bannerData = {};
  let $ = cheerio.load(html);
  bannerData.href = $(mainWrapper).attr("href");
  bannerData.isSale =
    $(mainWrapper).attr("class")?.trim() === "sale-banner";
  bannerData.backgroundColor = $(mainWrapper)
    .attr("style")
    ?.split(":")[1]
    ?.trim();
  bannerData.widthSource = $(sourceSelector).attr("width");
  bannerData.heightSource = $(sourceSelector).attr("height");
  //   const splittedSrcset = $(sourceSelector)
  //     .attr("srcset")
  //     .split("/");
  //   bannerData.srcset =
  //     splittedSrcset[splittedSrcset.length - 1].trim();
  bannerData.srcset = $(sourceSelector).attr("srcset")?.trim();
  bannerData.media = $(sourceSelector).attr("media").trim();

  bannerData.widthImg = $(imgSelector).attr("width");
  bannerData.heightImg = $(imgSelector).attr("height");

  //   const splittedSrc = $(imgSelector).attr("src").split("/");
  //   bannerData.src = splittedSrc[splittedSrc.length - 1].trim();
  bannerData.src =
    $(imgSelector)?.attr("data-src")?.trim() ||
    $(imgSelector)?.attr("src")?.trim();
  bannerData.alt = $(imgSelector).attr("alt").trim();

  return bannerData;
};
