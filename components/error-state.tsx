import cx from "classnames";
import { ComponentPropsWithoutRef } from "react";
import Button from "@/components/button";
import Icon from "@/components/icon";
import Typography from "@/components/typography";

type Props = ComponentPropsWithoutRef<"div">;

export default function ErrorState({ children, onClick, className, ...props }: Props) {
  return (
    <div role="alert" className={cx("bg-red-100 border border-red-400 text-center p-4", className)} {...props}>
      <Icon name="sad" width={32} height={32} className="mx-auto text-red-400 mb-4" />
      <Typography className="mb-4">{children}</Typography>
      <Button onClick={onClick} className="text-red-400">
        Retry
      </Button>
    </div>
  );
}
