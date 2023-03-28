import { ComponentPropsWithoutRef, ElementType } from "react";
import Link from "next/link";
import cx from "classnames";

type Props<T extends ElementType> = {
  as?: "a" | "button";
  selected?: boolean;
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<T>;

const styles = {
  primary: "",
  secondary: "",
};

export default function Button<C extends ElementType = "a" | "button">({
  as,
  variant = "primary",
  href,
  selected,
  className,
  ...props
}: Props<C>) {
  const Tag = href ? Link : "button";

  return (
    <Tag
      href={href}
      className={cx(
        "inline-flex items-center gap-2 py-1 px-2 uppercase text-xs hover:bg-white font-sans font-bold tracking-widest hover:text-primary-900 focus-visible:text-primary-900",
        { "text-primary-900": selected },
        { "text-primary-600": !selected },
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
