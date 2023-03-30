import cx from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export default function Skeleton({ className, ...props }: Props) {
  return <div aria-hidden="true" className={cx("bg-primary-100 animate-pulse", className)} {...props} />;
}
