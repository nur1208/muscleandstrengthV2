import cheerio from "cheerio";
export const scrapBuyingOptions = (mainDivHtml) => {
  let $ = cheerio.load(mainDivHtml);

  return $(".group")
    .toArray()
    .map((group) => ({
      cost: {
        beforeDiscount:
          $(".cost", $(group))
            .html()
            .includes("before-discount") &&
          Number(
            $(".cost .before-discount .price", $(group))
              .text()
              .replace("$", "")
              .trim()
          ),
        regularPrice: Number(
          $(".cost .regular-price .price", $(group))
            .text()
            .replace("$", "")
            .trim()
        ),
      },
      title: $(".title", $(group)).text().trim(),
      serving: Number(
        $(".serving-info", $(group)).text().split(" ")[0].trim()
      ),
      deal: $(".deal", $(group)).text().trim(),
      options: !$(group).attr("class").includes("no-options")
        ? $(".sod_option", $(group))
            .toArray()
            .map((option) => ({
              title: $(option).text().trim(),
            }))
        : [],
    }));
};
