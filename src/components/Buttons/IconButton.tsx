import React from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  Icon: IconType;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ Icon, onClick }) => (
  <span
    className="cursor-pointer flex items-center space-x-2"
    onClick={onClick}
  >
    <Icon size={22} />
  </span>
);

export default IconButton;
