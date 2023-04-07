import { ComponentPropsWithoutRef, ReactNode } from "react";
import cx from "classnames";
import { icons } from "@/components/icon";
import { Typography, Icon } from "@/components";

type Props = {
  text: string;
  icon?: keyof typeof icons;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function EmptyState({ text, icon, children, className, ...props }: Props) {
  return (
    <div
      className={cx(
        "text-center border border-primary-300 p-4 bg-cogs flex flex-col justify-center items-center",
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} width={48} height={48} className="text-primary-300 mb-4" />}
      <Typography className="mb-4">{text}</Typography>
      {children}
    </div>
  );
}
