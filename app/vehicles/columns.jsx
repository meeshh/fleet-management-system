"use client";

import Status from "@/components/status";
import TableHeader from "@/components/table-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  faTruck,
  faGasPump,
  faUser,
  faSortUp,
  faSortDown,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <TableHeader name="Vehicle" column={column} icon={faTruck} sortable />
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
      <TableHeader name="Fuel Type" column={column} icon={faGasPump} sortable />
    ),
  },
  {
    accessorKey: "driver",
    header: ({column}) => (
      <TableHeader name="Driver" column={column} icon={faUser} sortable />
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
];
