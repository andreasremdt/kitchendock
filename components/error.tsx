import { ComponentPropsWithoutRef } from "react";
import cx from "classnames";

type Props = ComponentPropsWithoutRef<"p">;

export default function Error({ className, ...props }: Props) {
  return <p className={cx("font-sans text-red text-sm", className)} {...props} />;
}
