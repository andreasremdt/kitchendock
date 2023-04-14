import { KeyboardEvent, MouseEvent, useRef, FocusEvent, ElementType } from "react";
import cx from "classnames";
import Typography, { Props as TypographyProps } from "@/components/typography";

type Props<T extends ElementType> = {
  onSave: (content: string) => void;
  children?: string;
  disabled?: boolean;
} & TypographyProps<T>;

export default function InlineEditable<C extends ElementType = "p">({
  onSave,
  children,
  className,
  disabled,
  ...props
}: Props<C>) {
  const cache = useRef<string | undefined>(children);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter") {
      event.preventDefault();

      onSave(event.currentTarget.textContent as string);

      event.currentTarget.removeAttribute("contenteditable");
      event.currentTarget.blur();
      cache.current = undefined;
    }

    if (event.key === "Escape") {
      event.currentTarget.textContent = cache.current as string;
      event.currentTarget.removeAttribute("contenteditable");
      cache.current = undefined;
    }
  }

  function handleBlur(event: FocusEvent<HTMLElement>) {
    onSave(event.currentTarget.textContent as string);

    event.currentTarget.removeAttribute("contenteditable");
    event.currentTarget.blur();
    cache.current = undefined;
  }

  function handleClick(event: MouseEvent<HTMLElement>) {
    event.currentTarget.setAttribute("contenteditable", "true");
    event.currentTarget.focus();
    window.getSelection()?.setPosition(event.currentTarget, 1);

    if (document.activeElement !== event.currentTarget) {
      cache.current = event.currentTarget.textContent as string;
    }
  }

  function handleFocus(event: FocusEvent<HTMLElement>) {
    event.currentTarget.setAttribute("contenteditable", "true");
    window.getSelection()?.setPosition(event.currentTarget, 1);

    if (document.activeElement !== event.currentTarget) {
      cache.current = event.currentTarget.textContent as string;
    }
  }

  return (
    // @ts-ignore
    <Typography
      className={cx(
        "focus:cursor-text focus:scale-100 caret-primary-900 selection:bg-primary-500/30 min-w-min mx-auto",
        {
          "hover:scale-105 transition-transform cursor-pointer outline-none focus:ring focus:ring-primary-300 focus:ring-offset-4":
            !disabled,
        },
        className
      )}
      onClick={disabled ? undefined : handleClick}
      onKeyDown={disabled ? undefined : handleKeyDown}
      onFocus={disabled ? undefined : handleFocus}
      onBlur={disabled ? undefined : handleBlur}
      tabIndex={0}
      {...props}
    >
      {children}
    </Typography>
  );
}
