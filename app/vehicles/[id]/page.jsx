import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/@/components/ui/card";
import EquipmentIcon from "@/components/equipment-icon";
import EquipmentsDialog from "@/components/equipments-dialog";
import Status from "@/components/status";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Cog, Fuel, User } from "lucide-react";
import slugify from "slugify";

// async function getData(id) {
//   // Fetch data from your API here.
//   const vehiclesRes = await fetch(
//     `http://localhost:3000/api/vehicles?id=${id}`
//   );
//   const vehicle = await vehiclesRes.json();
//   return vehicle[0];
// }
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

async function getData(id) {
  const vehiclesRes = await fetch(
    `http://localhost:3000/api/vehicles?id=${id}`
  );
  const vehicles = await vehiclesRes.json();
  const equipmentsRes = await fetch("http://localhost:3000/api/equipments");
  const equipments = await equipmentsRes.json();
  return { vehicle: vehicles[0], equipmentsToMap: equipments };
}

const SingleVehicle = async ({ params: { id } }) => {
  const {
    vehicle: { name, driver, status, fuelType, equipments },
    equipmentsToMap,
  } = await getData(id);

  const equipmentsMap = createEquipmentsObject(equipmentsToMap);

  return (
    <TooltipProvider>
      <div className="container flex justify-center items-center h-full">
        <Card className="min-w-96 bg-slate-700">
          <CardHeader className="pb-0">
            <CardTitle>{name}</CardTitle>
            <CardDescription className="flex gap-1 items-center">
              <Status status={status} className="inline-block" />
              <span className="flex-1">{status}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <User className="w-8" />
              <span className="flex-1">{driver}</span>
              <Avatar className="mr-2">
                <AvatarFallback>{driver[0].toUpperCase()}</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <Fuel className="w-8" /> {fuelType}
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 items-center">
                {equipments?.map((id) => {
                  return (
                    <EquipmentIcon key={id} accessKey={equipmentsMap[id]} />
                  );
                })}
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="ml-auto" variant="ghost">
                    <Cog />
                  </Button>
                </DialogTrigger>

                <EquipmentsDialog
                  equipments={equipments}
                  equipmentsMap={equipmentsMap}
                />
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default SingleVehicle;
