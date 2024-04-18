import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

const TableHeader = ({
  name,
  column = null,
  icon = null,
  sortable = false,
}) => {
  const isSorted = column?.getIsSorted() ?? false;
  return (
    <div className="font-bold flex gap-2 items-center">
      {icon && <FontAwesomeIcon icon={icon} />}
      <span className="flex-1">{name}</span>
      {sortable && (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {isSorted ? (
            isSorted === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} />
            ) : (
              <FontAwesomeIcon icon={faSortDown} />
            )
          ) : (
            <FontAwesomeIcon icon={faSort} />
          )}
        </Button>
      )}
    </div>
  );
};

export default TableHeader;
