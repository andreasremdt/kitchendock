import { ComponentPropsWithoutRef } from "react";
import cx from "classnames";

type Props = ComponentPropsWithoutRef<"label">;

export default function Label({ className, ...props }: Props) {
  return (
    <label
      className={cx("uppercase font-sans mb-1 flex gap-x-2 font-bold tracking-wider text-xs", className)}
      {...props}
    />
  );
}
