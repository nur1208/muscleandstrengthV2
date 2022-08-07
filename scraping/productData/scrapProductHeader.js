import cheerio from "cheerio";

const sourceSelector = (child) =>
  `.product-image > picture > source:nth-child(${child})`;
const imgSelector = `.product-image > picture > img`;
const reviewsSelector =
  ".product-data .review-status-button .button-text";
export const scrapProductHeader = (mainDivHtml) => {
  const item = {};
  let $ = cheerio.load(mainDivHtml);
  const imgUrl = {};

  imgUrl[400] = $(sourceSelector(1)).attr("srcset").trim();
  imgUrl[600] = $(sourceSelector(2)).attr("srcset").trim();
  imgUrl[700] = $(imgSelector).attr("src").trim();
  item.imgUrl = imgUrl;
  const brand = $(".brand a").text().trim();
  item.brand = {};
  item.brand.title = brand;
  item.brand.href = $(".brand a").attr("href").trim();
  item.name = $(".product-title")
    .text()
    .replace(brand, "")
    .trim();
  item.tagline = $(".tagline").text().trim();
  item.features = $("ul.product-features")
    .children()
    .toArray()
    .map((li) => $(li).text().trim());
  item.ratingPercentage = Number(
    $(".rating")
      .attr("style")
      .split(":")[1]
      .replace("%;", "")
      .trim()
  );
  item.reviews = Number(
    $(reviewsSelector).text().split(" ")[0].trim()
  );
  return item;
};
