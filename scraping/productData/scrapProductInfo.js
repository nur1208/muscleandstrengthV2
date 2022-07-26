import cheerio from "cheerio";

export const scrapProductInfo = (mainDivHtml) => {
  let $ = cheerio.load(mainDivHtml);

  return $(".std")
    .children()
    .toArray()
    .map((child) => {
      const item = {};
      item.type = child.name;
      if (item.type === "style") {
        item.style = $(child).text().trim();
        return item;
      }

      if (
        item.type === "div" &&
        $(child).hasClass("video-wrapper")
      ) {
        item.type = "video";
        if ($("iframe", $(child)).attr("src")) {
          if (
            $("iframe", $(child)).attr("src").includes("youtube")
          )
            item.videId = $("iframe", $(child))
              .attr("src")
              .split("embed/")[1]
              .trim();
          else
            item.videId = $("iframe", $(child))
              .attr("src")
              .trim();
        } else {
          item.videId = $("iframe", $(child))
            ?.attr("data-src")
            ?.trim();
        }

        return item;
      }

      if (item.type === "img") {
        item.imgUrl = $(child).attr("data-src");
        item.alt = $(child).attr("alt");
        item.isFullWidthMobile = $(child).hasClass(
          "full-width-mobile"
        );

        return item;
      }

      item.mainStyle = $(child).attr("class")?.trim();
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

        if (childHolder.type === "li") {
          childHolder.lis = $(child)
            .children()
            .toArray()
            .map((li) => $(li).text().trim());
        }
        item.child = childHolder;
      }
      return item;
    });
};
