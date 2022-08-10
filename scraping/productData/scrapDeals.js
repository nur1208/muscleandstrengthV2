import cheerio from "cheerio";

export const scrapDeals = (mainDivHtml) => {
  let $ = cheerio.load(mainDivHtml);
  const deals = $(".swiper-slide")
    .toArray()
    .map((slide) => ({
      imgUrl: $("img", $(slide)).attr("data-src").trim(),
      label: $(".deal-label", $(slide)).text().trim(),
      desc: $(".deal-desc", $(slide)).text().trim(),
    }));

  return deals;
};
