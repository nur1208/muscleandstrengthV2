import { useRef, useState } from "react";

export const useStartFilter = () => {
  const [selectStar, setSelectStar] = useState("all");
  const ref = useRef(null);
  const renderSmallPoll = (index) => {
    // console.log("start" + index, index * 20);
    const smallPoll = [];
    if (index < 5) {
      for (
        let indexIN = index * 3 + 3;
        indexIN >= index * 3 + 1;
        indexIN--
      ) {
        // console.log(indexIN, (indexIN + index) * 5);
        smallPoll.push(
          <span
            class="irs-grid-pol small"
            style={{
              left: `${(indexIN + index) * 5}%`,
            }}
            key={`index-${(indexIN + index) * 5}`}
          ></span>
        );
      }
    }

    return smallPoll;
  };
  const handleOnClick = (e) => {
    // Get the target
    const target = e.target;
    let barWidth = 311;

    if (ref.current) {
      barWidth = ref.current.offsetWidth;
    }
    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    const x = e.clientX - rect.left;
    const p = (x / barWidth) * 100;
    if (p <= 10) setSelectStar("all");
    else if (p >= 11 && p <= 29) setSelectStar("1");
    else if (p >= 30 && p <= 50) setSelectStar("2");
    else if (p >= 51 && p <= 70) setSelectStar("3");
    else if (p >= 70 && p <= 85) setSelectStar("4");
    else if (p >= 85) setSelectStar("5");
  };

  const getLabelLeftWidth = () => {
    switch (selectStar) {
      case "all":
        return 0;
      case "1":
        return 11.8712;
      case "2":
        return 31.8712;
      case "3":
        return 51.8712;
      case "4":
        return 71.8712;
      case "5":
        return 83.7423;

      default:
        return 0;
    }
  };

  return [
    { selectStar, ref },
    { getLabelLeftWidth, handleOnClick, renderSmallPoll },
  ];
};
