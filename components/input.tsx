import { ComponentPropsWithRef, forwardRef } from "react";
import cx from "classnames";

type Props = ComponentPropsWithRef<"input">;

export default forwardRef<HTMLInputElement, Props>(function Input({ className, ...props }: Props, ref) {
  return (
    <input
      className={cx(
        "w-full border border-primary-300 h-8 px-2 font-sans outline-none hover:border-primary-700 focus-visible:border-primary-700 text-sm",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
