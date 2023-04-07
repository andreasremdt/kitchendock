import { ComponentPropsWithRef, forwardRef } from "react";
import cx from "classnames";

type Props = Omit<ComponentPropsWithRef<"input">, "type">;

export default forwardRef<HTMLInputElement, Props>(function Checkbox(
  { className, ...props }: Props,
  ref
) {
  return (
    <input
      type="checkbox"
      className={cx("accent-primary-900 outline-none border border-primary-300 w-5", className)}
      {...props}
      ref={ref}
    />
  );
});
