import slugify from "slugify";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { TooltipProvider } from "@/components/ui/tooltip";

async function getData() {
  // Fetch data from your API here.
  const vehiclesRes = await fetch("http://localhost:3000/api/vehicles");
  const vehicles = await vehiclesRes.json();
  const equipmentsRes = await fetch("http://localhost:3000/api/equipments");
  const equipments = await equipmentsRes.json();
  return { vehicles, equipments };
}

function createEquipmentsObject(equipments) {
  const itemsObject = {};
  equipments.forEach((item) => {
    itemsObject[item.id] = {
      name: item.name,
      icon: slugify(item.name, { replacement: "-", lower: true }),
    };
  });
  return itemsObject;
}

export default async function Vehicles() {
  const { vehicles, equipments } = await getData();

  const equipmentsMap = createEquipmentsObject(equipments);

  return (
    <TooltipProvider>
      <div className="container mx-auto py-10">
        <DataTable
          columns={columns}
          data={vehicles}
          equipments={equipmentsMap}
        />
      </div>
    </TooltipProvider>
  );
}
