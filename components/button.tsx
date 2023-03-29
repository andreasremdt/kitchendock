import { ComponentPropsWithoutRef, ElementType } from "react";
import Link from "next/link";
import cx from "classnames";

type Props<T extends ElementType> = {
  as?: "a" | "button";
  selected?: boolean;
  variant?: "text" | "solid" | "editor";
} & ComponentPropsWithoutRef<T>;

function getStyles(variant: "text" | "solid" | "editor", selected?: boolean) {
  const styles = {
    text: cx(
      "py-1 px-2 uppercase text-xs hover:bg-white font-sans font-bold tracking-widest hover:text-primary-900 focus-visible:text-primary-900",
      { "text-primary-900": selected },
      { "text-primary-600": !selected }
    ),
    solid: "",
    editor: cx("hover:bg-primary-900 hover:text-primary-50 cursor-default p-1", {
      "bg-primary-900 text-primary-50": selected,
    }),
  };

  return styles[variant];
}

export default function Button<C extends ElementType = "a" | "button">({
  as,
  variant = "text",
  href,
  selected,
  type = "button",
  className,
  ...props
}: Props<C>) {
  const Tag = href ? Link : "button";

  return (
    <Tag
      href={href}
      className={cx("inline-flex items-center gap-2", getStyles(variant, selected), className)}
      type={href ? undefined : type}
      {...props}
    />
  );
}
