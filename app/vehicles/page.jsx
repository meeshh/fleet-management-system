import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  // Fetch data from your API here.
  const response = await fetch("http://localhost:3000/api/vehicles");
  const data = await response.json();
  return data;
}

export default async function Vehicles() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
