import { get } from "lodash";
export function imageAttachFunction(cardData, cardImages) {
  let i = 0;
  const finalData = cardData.map((item, index) => {
    let imageItem = cardImages[i];
    item = {
      ...item,
      image: get(imageItem, "image", ""),
    };
    if (i === 4) {
      i = 0;
    } else {
      i++;
    }
    return item;
  });
  return finalData;
}
