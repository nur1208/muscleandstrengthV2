import { useEffect, useRef, useState } from "react";

export const useSelect = (initOptions, getSelectedValue) => {
  const [isOpen, setIsOpen] = useState(false);

  const [options, setOptions] = useState(initOptions);
  const [selectedValue, setSelectedValue] = useState("");

  const listRef = useRef(null);
  const updateOption = (updateIndex, newObject) => {
    const cleanObject = {};

    Object.keys(newObject).forEach((key) => {
      if (newObject[key]) cleanObject[key] = false;
    });

    const newOptions = options.map((option, index) =>
      index === updateIndex
        ? { ...option, ...newObject }
        : { ...option, ...cleanObject }
    );
    setSelectedValue(
      newOptions.find((option) => option.isSelected)?.title
    );
    getSelectedValue({
      value: newOptions.find((option) => option.isSelected)
        ?.title,
      index: newOptions.findIndex((option) => option.isSelected),
    });
    setOptions(newOptions);
  };

  useEffect(() => {
    updateOption(0, { isSelected: true, isActive: true });
  }, []);

  const resetIsActive = () =>
    updateOption(
      options.findIndex((option) => option.isSelected),
      { isActive: true }
    );
  const handleClose = () => {
    resetIsActive();
    setSelectedValue(
      options.find((option) => option.isSelected)?.title
    );
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    if (isOpen) resetIsActive();
    setIsOpen(!isOpen);
  };

  const handleOptionHover = (index) =>
    updateOption(index, { isActive: true });

  const handleOptionClick = (index) => {
    updateOption(index, { isSelected: true });
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (
      ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(e.key)
    )
      e.preventDefault();
    const node = listRef.current;
    if (e.key === "Escape") handleClose();

    if (e.key === "ArrowUp") {
      const index =
        options.findIndex((option) => option.isActive) - 1;
      if (index >= 0) {
        updateOption(index, { isActive: true });
        setSelectedValue(options[index].title);
      }
      if (index < 2)
        if (node) {
          node.scrollBy({ top: -36 });
        }
    }

    if (e.key === "ArrowDown") {
      const index =
        options.findIndex((option) => option.isActive) + 1;
      if (index < options.length) {
        updateOption(index, { isActive: true });
        setSelectedValue(options[index].title);
      }

      if (index > 4)
        if (node) {
          node.scrollBy({ top: 36 });
        }
    }

    if (e.key === "Enter") {
      const index = options.findIndex(
        (option) => option.isActive
      );
      updateOption(index, { isSelected: true });
      setIsOpen(false);
    }
  };

  return [
    { isOpen, options, selectedValue, listRef },
    {
      handleBlue: handleClose,
      handleSelectClick,
      handleOptionHover,
      handleOptionClick,
      handleKeyDown,
    },
  ];
};
