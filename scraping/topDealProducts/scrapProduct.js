import cheerio from "cheerio";

export const scrapProduct = (cell) => {
  const item = {};

  let $ = cheerio.load(cell.toString());
  item.href = $(".product-link", $(cell)).attr("href").trim();
  item.imgUrl = $("img.product-image", $(cell))
    .attr("data-src")
    .trim();

  item.title = $(".product-name", $(cell)).text().trim();
  item.deal = $(".mns-label", $(cell)).text().trim();
  item.price = Number(
    $(".price", $(cell)).text().replace("$", "").trim()
  );
  return item;
};
