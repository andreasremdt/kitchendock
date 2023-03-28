import { ComponentPropsWithoutRef, ElementType } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import Typography from "@/components/typography";

type Props<T extends ElementType> = {
  as?: "a" | "div";
  title: string;
  category?: string;
  image?: string;
} & ComponentPropsWithoutRef<T>;

export default function Card<C extends ElementType = "a" | "div">({
  as,
  children,
  className,
  title,
  category,
  image,
  href,
  ...props
}: Props<C>) {
  const Tag = href ? Link : "div";

  return (
    <Tag
      className={cx(
        "bg-white text-center h-full flex flex-col border border-primary-300",
        {
          "transition-transform hover:-translate-y-1 focus-visible:outline outline-stone-400 outline-offset-2":
            Boolean(href),
        },
        className
      )}
      href={href}
      {...props}
    >
      {image && <Image src={image} alt={title} width={400} height={250} className="aspect-video object-cover" />}
      <div className="p-4 flex flex-col justify-center flex-1">
        <Typography variant="h4" as="h2">
          {title}
        </Typography>
        {category && <Typography className="mt-2">{category}</Typography>}
      </div>
    </Tag>
  );
}
