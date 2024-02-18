import clsx from "clsx";
import React, { ComponentProps, ComponentType } from "react";

export type TextFieldProps = ComponentProps<"input"> & {
  isLoading?: boolean;
};

const TextField: ComponentType<TextFieldProps> = ({
  className,
  isLoading,
  ...props
}) => {
  return (
    <input
      {...props}
      className={clsx("input input-bordered", className)}
      disabled={isLoading}
    />
  );
};

export default TextField;
