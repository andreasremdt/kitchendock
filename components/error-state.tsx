import cx from "classnames";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { icons } from "@/components/icon";
import { Typography, Icon } from "@/components";

type Props = {
  icon?: keyof typeof icons;
  action?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function ErrorState({ children, icon, action, className, ...props }: Props) {
  return (
    <div
      role="alert"
      className={cx(
        "bg-red-100 border border-red-400 text-center p-4 flex flex-col gap-4",
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} width={32} height={32} className="mx-auto text-red-400" />}
      <Typography className="text-red-700 text-sm">{children}</Typography>
      {action}
    </div>
  );
}
