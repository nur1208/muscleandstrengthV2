import cheerio from "cheerio";
import {
  getIconId,
  getImgUrl,
  getRating,
  getText,
} from "./utils.js";

export const scrapReviews = (mainDivHtml) => {
  let $ = cheerio.load(mainDivHtml);

  return $(".customer-review-wrap")
    .toArray()
    .map((review) => {
      const item = {};

      item.rating = getRating($(".overall .rating", $(review)));
      $(".review-user-wrap img", $(review));

      item.imgUrl = getImgUrl(
        $(".review-user-wrap img", $(review))
      );

      item.name = getText(
        $(".review-user-wrap .user-name", $(review))
      );

      item.badges = $(".review-user-wrap .user-badge", $(review))
        .toArray()
        .map((badge) => ({
          iconId: getIconId($(".badge-icon use", $(badge))),
          label: getText($(".badge-label", $(badge))),
        }));

      item.content = getText(
        $(".helpful-wrap .helpful-data", $(review))
      );

      item.dateOfCreation = $(
        ".review-meta-wrap abbr",
        $(review)
      )
        .attr("title")
        .trim();
      return item;
    });
};
