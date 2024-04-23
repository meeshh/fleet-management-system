import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const CustomDialogContent = ({
  title,
  description,
  children,
  actions = [],
}) => {
  return (
    <DialogContent className="bg-slate-700">
      {title && (
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      )}
      {children}
      {!!actions?.length && (
        <DialogFooter>
          {actions.map(({ name, variant }) => (
            <Button key={name} variant={variant}>
              {name}
            </Button>
          ))}
        </DialogFooter>
      )}
    </DialogContent>
  );
};

export default CustomDialogContent;
