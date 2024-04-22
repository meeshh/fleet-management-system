import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const EquipmentIcon = ({ accessKey }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Image
          className="rounded p-1 bg-slate-300"
          src={`/icons/${accessKey.icon}.svg`}
          alt={accessKey.name}
          width={30}
          height={30}
        />
      </TooltipTrigger>
      <TooltipContent>{accessKey.name}</TooltipContent>
    </Tooltip>
  );
};

export default EquipmentIcon;
