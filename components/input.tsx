import { ComponentPropsWithRef, forwardRef } from "react";
import cx from "classnames";

const styles = {
  normal: "h-8 px-2 text-sm",
  big: "h-16 px-4 text-2xl",
};

type Props = {
  variant?: keyof typeof styles;
} & ComponentPropsWithRef<"input">;

export default forwardRef<HTMLInputElement, Props>(function Input(
  { className, variant = "normal", ...props }: Props,
  ref
) {
  return (
    <input
      className={cx(
        styles[variant],
        "w-full border border-primary-300 font-sans outline-none hover:border-primary-700 focus-visible:border-primary-700",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
