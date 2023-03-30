import { ComponentPropsWithoutRef, ElementType } from "react";
import Link from "next/link";
import cx from "classnames";

type Props<T extends ElementType> = {
  as?: "a" | "div";
} & ComponentPropsWithoutRef<T>;

export default function Card<C extends ElementType = "a" | "div">({
  as,
  children,
  className,
  href,
  ...props
}: Props<C>) {
  const Tag = href ? Link : "div";

  return (
    <Tag
      className={cx(
        "bg-white text-center flex flex-col border border-primary-300",
        {
          "transition-transform hover:-translate-y-1 focus-visible:outline outline-stone-400 outline-offset-2":
            Boolean(href),
        },
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Tag>
  );
}
