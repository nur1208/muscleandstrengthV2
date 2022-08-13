import cheerio from "cheerio";

const getNumber = (element) =>
  Number(
    element
      .text()
      .split("(")[1]
      .replace(")", "")
      .replace(",", "")
      .trim()
  );

const getRating = (element) =>
  Number(element.attr("style").split(":")[1].replace("%;", ""));
export const scrapReviewsOverall = (mainDivHtml) => {
  let $ = cheerio.load(mainDivHtml);

  const item = {};
  item.overallRating = {
    width: getRating($(".subsection-inner-wrap .rating")),
    parentage: Number(
      $(".subsection-inner-wrap .overall-rating-label")
        .text()
        .split(" ")[0]
        .trim()
    ),
  };
  item.reviews = getNumber(
    $(
      ".subsection-inner-wrap .review-data-summary .item:nth-child(1)"
    )
  );

  item.verifiedBuyers = getNumber(
    $(
      ".subsection-inner-wrap .review-data-summary .item:nth-child(2)"
    )
  );

  item.graphBar = $(".subsection-inner-wrap .bar-graph-wrap li")
    .toArray()
    .map((li) => ({
      title: $(".stars", $(li)).text().split(" ")[0],
      percentage: Number(
        $(".percentage", $(li)).text().replace("%", "")
      ),
    }));
  // #main-wrap > span > div.main-content.continued > div.product-reviews-section > div.section-inner-wrap > div.top-rated-flavors-subsection > div > ul > li:nth-child(1) > div
  item.ratedFlavors = $(
    ".section-inner-wrap  .top-rated-flavors-subsection li"
  )
    .toArray()
    .map((li) => ({
      title: $(".option-label", $(li)).text().trim(),
      //   title: $(li).toString(),
      percentage: Number(getRating($(".rating", $(li)))),
    }));

  return item;
};
