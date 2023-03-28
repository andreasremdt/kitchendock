import { ComponentPropsWithoutRef, ElementType } from "react";
import cx from "classnames";

type Props<T extends ElementType> = {
  as?: T;
  variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5";
} & ComponentPropsWithoutRef<T>;

const styles = {
  h1: "text-6xl uppercase font-sans tracking-widest font-bold title",
  h2: "text-3xl uppercase font-sans tracking-wide text-primary-900 font-bold",
  h3: "text-2xl uppercase font-sans tracking-wider text-primary-900 font-bold",
  h4: "text-xl uppercase font-sans tracking-wider text-primary-900 font-bold",
  h5: "uppercase font-sans tracking-widest text-primary-900 font-bold",
  p: "",
};

export default function Typography<C extends ElementType = "p">({ as, variant = "p", className, ...props }: Props<C>) {
  const Tag = as || "p";

  return <Tag className={cx(styles[variant], className)} {...props} />;
}
