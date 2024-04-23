import Image from "next/image";
import CustomDialogContent from "./custom-dialog-content";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

const EquipmentsDialog = ({ equipments, equipmentsMap }) => {
  return (
    <CustomDialogContent
      title="Manage Equipments"
      description="Adding and removing exquipments to the following vehicle"
      // actions={[
      //   { name: "Cancel", variant: "ghost" },
      //   { name: "Save", variant: "secondary" },
      // ]}
    >
      {Object.keys(equipmentsMap).map((id) => {
        const { name, icon } = equipmentsMap[id];
        return (
          <div key={id} className="flex items-center justify-center space-x-2">
            <Image
              className="rounded p-1 bg-slate-300"
              src={`/icons/${icon}.svg`}
              alt={name}
              width={30}
              height={30}
            />
            <Label htmlFor="airplane-mode" className="flex-1">
              {name}
            </Label>
            {(
              <Switch
                id="airplane-mode"
                checked={equipments?.includes(parseInt(id, 10))}
              />
            )}
          </div>
        );
      })}
    </CustomDialogContent>
  );
};

export default EquipmentsDialog;
