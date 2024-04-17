"use client";

import Status from "@/components/status";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { faTruck, faGasPump, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const columns = [
  {
    accessorKey: "name",
    header: () => (
      <div className="font-bold flex gap-2 items-center">
        <FontAwesomeIcon icon={faTruck} />
        Vehicle
      </div>
    ),
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
    header: () => (
      <div className="font-bold flex gap-2 items-center">
        <FontAwesomeIcon icon={faGasPump} />
        Fuel Type
      </div>
    ),
  },
  {
    accessorKey: "driver",
    header: () => (
      <div className="font-bold flex gap-2 items-center">
        <FontAwesomeIcon icon={faUser} />
        Driver
      </div>
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
