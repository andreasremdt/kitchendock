import { ComponentPropsWithoutRef, ElementType, ForwardedRef, Ref, forwardRef } from "react";
import Link from "next/link";
import cx from "classnames";
import Icon from "@/components/icon";

export type Props<T extends ElementType> = {
  as?: "a" | "button";
  selected?: boolean;
  variant?: "text" | "solid" | "editor";
  loading?: boolean;
} & ComponentPropsWithoutRef<T>;

function getStyles(variant: "text" | "solid" | "editor", selected?: boolean) {
  const styles = {
    text: cx(
      "py-1 px-2 uppercase text-xs hover:bg-white font-sans font-bold tracking-widest hover:text-primary-900 focus-visible:text-primary-900",
      { "text-primary-900": selected },
      { "text-primary-600": !selected }
    ),
    solid:
      "h-8 px-4 uppercase text-xs bg-primary-900 text-primary-50 enabled:hover:bg-white font-sans font-bold tracking-widest enabled:hover:text-primary-900 enabled:focus-visible:text-primary-900 disabled:cursor-not-allowed",
    editor: cx("hover:bg-primary-900 hover:text-primary-50 cursor-default p-1", {
      "bg-primary-900 text-primary-50": selected,
    }),
  };

  return styles[variant];
}

export default forwardRef(function Button<C extends ElementType = "a" | "button">(
  { as, variant = "text", href, selected, loading, children, type = "button", className, ...props }: Props<C>,
  ref: ForwardedRef<C>
) {
  const Tag = href ? Link : "button";

  return (
    // @ts-ignore
    <Tag
      href={href}
      className={cx("inline-flex items-center relative gap-2", getStyles(variant, selected), className)}
      type={href ? undefined : type}
      disabled={loading}
      {...props}
      ref={ref}
    >
      {children}
      {loading && (
        <span className={cx("absolute inline-flex items-center", getStyles(variant, selected))} aria-hidden="true">
          <Icon name="spinner" className="animate-spin" />
        </span>
      )}
    </Tag>
  );
});
