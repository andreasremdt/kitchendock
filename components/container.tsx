import { ComponentPropsWithoutRef, ElementType } from "react";
import cx from "classnames";

type Props<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType = "div">({ as, className, href, ...props }: Props<C>) {
  const Tag = as || "div";

  return <Tag className={cx("max-w-5xl w-full px-4 mx-auto", className)} {...props} />;
}
