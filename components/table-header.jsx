import { Button } from "./ui/button";
import { ArrowUpDown, ArrowUpZA, ArrowDownAZ } from "lucide-react";

const TableHeader = ({
  name = "",
  column = null,
  icon: Icon = null,
  sortable = false,
  className = "",
}) => {
  const isSorted = column?.getIsSorted() ?? false;
  return (
    <div className={`font-bold flex gap-2 items-center ${className}`}>
      {Icon && <Icon />}
      {!!name && <span className="flex-1">{name}</span>}
      {sortable && (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {isSorted ? (
            isSorted === "asc" ? (
              <ArrowDownAZ />
            ) : (
              <ArrowUpZA />
            )
          ) : (
            <ArrowUpDown />
          )}
        </Button>
      )}
    </div>
  );
};

export default TableHeader;
