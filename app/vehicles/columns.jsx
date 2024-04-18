"use client";

import Status from "@/components/status";
import TableHeader from "@/components/table-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
          <Avatar>
            <AvatarFallback>{driver[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          {driver}
        </div>
      );
    },
  },
  {
    accessorKey: "equipments",
    header: ({ column }) => (
      <TableHeader name="Equipments" column={column} icon={Cog} />
    ),
    // cell: ({ row: { original } }) => {
    //   const { driver } = original;
    //   return (
    //     <div className="flex gap-2 items-center">
    //       <Avatar>
    //         <AvatarFallback>{driver[0].toUpperCase()}</AvatarFallback>
    //       </Avatar>
    //       {driver}
    //     </div>
    //   );
    // },
  },
];
