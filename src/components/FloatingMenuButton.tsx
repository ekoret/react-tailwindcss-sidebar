import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface Props {
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarActive: boolean;
}

const FloatingMenuButton = ({
  setSidebarActive,
  sidebarActive,
}: Props): JSX.Element => {
  const handleButtonClick = (): void => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <button
      className="floating-button"
      type="button"
      onClick={handleButtonClick}
    >
      <i className="my-auto text-white">
        <AiOutlineMenu size={24} />
      </i>
    </button>
  );
};

export default FloatingMenuButton;
