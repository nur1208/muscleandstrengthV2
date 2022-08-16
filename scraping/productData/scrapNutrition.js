import cheerio from "cheerio";
export const scrapNutrition = (mainDivHtml) => {
  let $ = cheerio.load(mainDivHtml);

  return $("div.panel-wrap > div.nutrition-info-inner")
    .children()
    .toArray()
    .map((option, index) => {
      const item = {};
      item.title = $("h4", $(option)).text().trim();
      item.servingSize = Number(
        $(".serving", $(option))
          .text()
          .split(":")[1]
          ?.trim()
          .split(" ")[0]
          ?.trim()
      );

      item.servingsPerContainer = Number(
        $(".serving", $(option)).text().split(":")[2]?.trim()
      );

      item.infoTable = $("#nutrition-info-table .row", $(option))
        .children()
        .toArray()
        .map((row) => {
          const item = {};
          item.mainStyle = $(row).attr("class").trim();
          const colsWrapper = $(row).children().toArray();
          const innerIs3Cols = colsWrapper.every((div, index) =>
            $(div)
              .attr("class")
              ?.trim()
              ?.includes(`col-${index + 1}`)
          );

          item.innerIs3Cols = innerIs3Cols;

          let cols;
          if (innerIs3Cols) {
            cols = colsWrapper.map((col) => {
              const item = {};
              item.hasChildren = $(col).children().length !== 0;
              if ($(col).children().length === 0) {
                item.text = $(col).text().trim();
              } else {
                item.children = $(col)
                  .children()
                  .toArray()
                  .map((children) => ({
                    style: $(children).attr("class"),
                    text: $(children).text().trim(),
                  }));
              }

              return item;
            });
          } else {
            cols = colsWrapper.map((col) => {
              const item = {};

              item.hasChildren = $(col).children().length !== 0;
              if ($(col).children().length === 0) {
                item.text = $(col).text().trim();
                if (item.text !== "")
                  item.style = $(col).attr("class").trim();
                else item.text = $(row).text().trim();
              } else {
                item.style = $(col).attr("class").trim();
                item.children = $(col)
                  .children()
                  .toArray()
                  .map((child) => ({
                    text: $(child).text().trim(),
                    style: $(child).attr("class").trim(),
                  }));
              }
              return item;
            });
            //   console.log({ ...item, cols });
          }

          item.cols = cols;
          return item;
        });
      item.ingredients = $(
        ".nutrition-panel > div:nth-child(3)",
        $(option)
      )
        .text()
        .trim();

      item.allergenWarning = $(
        ".nutrition-panel > div:nth-child(5)",
        $(option)
      )
        .text()
        .trim();

      item.directions = $(
        ".nutrition-panel > span:nth-child(6)",
        $(option)
      )
        .text()
        .trim();

      item.warning = $(
        ".nutrition-panel > span:nth-child(7)",
        $(option)
      )
        .text()
        .trim();
      return item;
    });
};
