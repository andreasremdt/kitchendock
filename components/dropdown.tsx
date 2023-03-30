import { ElementType } from "react";
import { Menu, MenuProps, MenuItemsProps } from "@headlessui/react";
import cx from "classnames";

export default function Dropdown<T extends ElementType>({
  as = "div",
  className,
  ...props
}: Omit<MenuProps<T>, "className"> & { className?: string }) {
  return <Menu as={as} className={cx("relative", className)} {...props} />;
}

Dropdown.Button = Menu.Button;
Dropdown.Item = Menu.Item;

// @ts-ignore
Dropdown.Items = function Items<T extends ElementType>({ className, ...props }: MenuItemsProps<T>) {
  return (
    <Menu.Items
      className={cx("absolute bg-primary-50 border border-primary-300 flex flex-col w-max max-w-md py-2", className)}
      {...props}
    />
  );
};
