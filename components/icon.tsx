import { ComponentPropsWithoutRef } from "react";

const icons = {
  bold: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"
        fill="currentColor"
      />
    </>
  ),
  italic: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" fill="currentColor" />
    </>
  ),
  underline: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" fill="currentColor" />
    </>
  ),
  chevronLeft: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="currentColor" />
    </>
  ),
  heading: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" fill="currentColor" />
    </>
  ),
  check: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
    </>
  ),
  save: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M7 19v-6h10v6h2V7.828L16.172 5H5v14h2zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 12v4h6v-4H9z"
        fill="currentColor"
      />
    </>
  ),
  cancel: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
        fill="currentColor"
      />
    </>
  ),
  edit: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"
        fill="currentColor"
      />
    </>
  ),
  plus: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor" />
    </>
  ),
  minus: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5 11h14v2H5z" fill="currentColor" />
    </>
  ),
  fileEdit: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002.002-1.412 7.778-7.778z"
        fill="currentColor"
      />
    </>
  ),
  image: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
        fill="currentColor"
      />
    </>
  ),
};

type Props = {
  name: keyof typeof icons;
} & ComponentPropsWithoutRef<"svg">;

export default function Icon({ name, width = 20, height = 20, ...props }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} {...props}>
      {icons[name]}
    </svg>
  );
}
