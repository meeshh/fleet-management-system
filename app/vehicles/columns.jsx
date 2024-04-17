"use client";

export const columns = [
  {
    accessorKey: "name",
    header: () => <div className="font-bold">Vehicle</div>,
    cell: ({ row: { original } }) => {
      console.log(original);
      return <div>{original.name}</div>;
    },
  },
  {
    accessorKey: "fuelType",
    header: "Fuel Type",
  },
  {
    accessorKey: "driver",
    header: "Driver",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
