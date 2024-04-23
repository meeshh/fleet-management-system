import { DialogTrigger } from "./ui/dialog";
import { DropdownMenuItem, DropdownMenuShortcut } from "./ui/dropdown-menu";

const CustomDialogTrigger = ({
  icon: Icon = null,
  label = "",
  shortcut = "",
}) => {
  return (
    <DialogTrigger className="w-full">
      <DropdownMenuItem className="flex gap-1">
        {Icon && <Icon />}
        {!!label && <span>{label}</span>}
        {!!shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
      </DropdownMenuItem>
    </DialogTrigger>
  );
};

export default CustomDialogTrigger;
