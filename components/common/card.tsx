import clsx from "clsx";
import React, { ComponentProps, ComponentType, PropsWithChildren } from "react";

const Card: ComponentType<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={clsx("card bg-base-100 shadow-md", className)}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
