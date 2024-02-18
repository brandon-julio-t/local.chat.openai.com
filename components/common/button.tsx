import clsx from "clsx";
import { ComponentProps, ComponentType } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary";
  isLoading?: boolean;
};

const Button: ComponentType<ButtonProps> = ({
  className,
  variant,
  isLoading,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={clsx("btn", variant === "primary" && "btn-primary", className)}
    />
  );
};

export default Button;
