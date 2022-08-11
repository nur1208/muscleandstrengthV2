import cheerio from "cheerio";

export const scrapProductInfo = (mainDivHtml) => {
  let $ = cheerio.load(mainDivHtml);

  return $(".std")
    .children()
    .toArray()
    .map((child) => {
      const item = {};
      item.type = child.name;
      item.hasChildren = $(child).children().length !== 0;
      if (!item.hasChildren) item.text = $(child).text().trim();

      if (item.hasChildren) {
        const childHolder = {};
        const childEle = $(child).children().toArray()[0];
        childHolder.type = childEle.name;
        if (childHolder.type === "img") {
          childHolder.imgUrl = $(childEle).attr("data-src");
          childHolder.alt = $(childEle).attr("alt").trim();
          childHolder.isFullWidthMobile = $(childEle).hasClass(
            "full-width-mobile"
          );
        }

        item.child = childHolder;
      }
      return item;
    });
};
