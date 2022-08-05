export const scrapFiled = (filed) => {
  const item = {};
  item.placeholder = filed.attr("placeholder")?.trim();
  item.id = filed.attr("id")?.trim();
  item.name = filed.attr("name")?.trim();
  item.type = filed.attr("type")?.trim();
  item.required = !!filed.attr("required")?.trim();
  return item;
};
