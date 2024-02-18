import clsx from "clsx";
import { ComponentProps, ComponentType } from "react";

const CardTitle: ComponentType<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return <div {...props} className={clsx("card-title", className)} />;
};

export default CardTitle;
