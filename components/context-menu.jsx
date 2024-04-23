import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import CustomDialogTrigger from "./custom-dialog-trigger";

import { menuActions } from "@/lib/menu-actions";

const ContextMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant="outline">
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-slate-700">
        {menuActions.map(({ groupName, actions }) => {
          return (
            <DropdownMenuGroup key={groupName}>
              <DropdownMenuLabel>{groupName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {actions.map(({ name, shortcut, icon }) => {
                return (
                  <CustomDialogTrigger
                    key={name}
                    icon={icon}
                    label={name}
                    shortcut={shortcut}
                  />
                );
              })}
            </DropdownMenuGroup>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ContextMenu;
