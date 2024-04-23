"use client";

import ContextMenu from "@/components/context-menu";
import EquipmentIcon from "@/components/equipment-icon";
import EquipmentsDialog from "@/components/equipments-dialog";
import Status from "@/components/status";
import TableHeader from "@/components/table-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog } from "@/components/ui/dialog";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { User, Truck, Cog, Fuel } from "lucide-react";

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <TableHeader name="Vehicle" column={column} icon={Truck} sortable />
      );
    },
    cell: ({ row: { original } }) => {
      const { name, status } = original;
      return (
        <div className="flex gap-2 items-center">
          <Status status={status} />
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "fuelType",
    header: ({ column }) => (
      <TableHeader name="Fuel Type" column={column} icon={Fuel} sortable />
    ),
  },
  {
    accessorKey: "driver",
    header: ({ column }) => (
      <TableHeader name="Driver" column={column} icon={User} sortable />
    ),
    cell: ({ row: { original } }) => {
      const { driver } = original;
      return (
        <div className="flex gap-2 items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar>
                <AvatarFallback>{driver[0].toUpperCase()}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>{driver}</TooltipContent>
          </Tooltip>
          {driver}
        </div>
      );
    },
  },
  {
    accessorKey: "equipments",
    header: ({ column }) => (
      <TableHeader className="text-center" name="Equipments" column={column} />
    ),
    cell: ({
      row: {
        original: { equipments },
      },
      table: { equipments: equipmentsMap },
    }) => {
      return (
        <div className="flex gap-1 justify-center items-center">
          {equipments?.map((id) => {
            return <EquipmentIcon key={id} accessKey={equipmentsMap[id]} />;
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: ({ column }) => (
      <TableHeader className="justify-center" column={column} icon={Cog} />
    ),
    cell: ({
      row: {
        original: { equipments, id },
      },
      table: { equipments: equipmentsMap },
    }) => {
      return (
        <Dialog>
          <ContextMenu />
          <EquipmentsDialog equipments={equipments} equipmentsMap={equipmentsMap} />
        </Dialog>
      );
    },
  },
];
