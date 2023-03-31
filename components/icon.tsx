import { ComponentPropsWithoutRef } from "react";

export const icons = {
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
  chevronDown: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="currentColor" />
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
  list: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
        fill="currentColor"
      />
    </>
  ),
  user: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
        fill="currentColor"
      />
    </>
  ),
  logout: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
        fill="currentColor"
      />
    </>
  ),
  globe: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
        fill="currentColor"
      />
    </>
  ),
  draft: (
    <>
      <path fill="none" d="M0 0L24 0 24 24 0 24z" />
      <path
        d="M20 2c.552 0 1 .448 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM13 12v2H8v-2h5zm3-4v2H8V8h8z"
        fill="currentColor"
      />
    </>
  ),
  sad: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
        fill="currentColor"
      />
    </>
  ),
  spinner: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" fill="currentColor" />
    </>
  ),
  upload: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM13 12v4h-2v-4H8l4-4 4 4h-3z"
        fill="currentColor"
      />
    </>
  ),
  camera: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
        fill="currentColor"
      />
    </>
  ),
  unsplash: (
    <>
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        d="M10 10v4h4v-4h7v11H3V10h7zm-2 2H5v7h14v-7h-3l-.001 4H8v-4zm8-9v6H8V3h8zm-2 2h-4v2h4V5z"
        fill="currentColor"
      />
    </>
  ),
  robot: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M13 4.055c4.5.497 8 4.312 8 8.945v9H3v-9c0-4.633 3.5-8.448 8-8.945V1h2v3.055zM19 20v-7a7 7 0 0 0-14 0v7h14zm-7-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        fill="currentColor"
      />
    </>
  ),
  video: (
    <>
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        d="M16 4c.552 0 1 .448 1 1v4.2l5.213-3.65c.226-.158.538-.103.697.124.058.084.09.184.09.286v12.08c0 .276-.224.5-.5.5-.103 0-.203-.032-.287-.09L17 14.8V19c0 .552-.448 1-1 1H2c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h14zm-1 2H3v12h12V6zM8 8h2v3h3v2H9.999L10 16H8l-.001-3H5v-2h3V8zm13 .841l-4 2.8v.718l4 2.8V8.84z"
        fill="currentColor"
      />
    </>
  ),
  lens: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M9.858 19.71L12 16H5.07a8.018 8.018 0 0 0 4.788 3.71zM4.252 14h4.284L5.07 7.999A7.963 7.963 0 0 0 4 12c0 .69.088 1.36.252 2zm2.143-7.708L8.535 10 12 4a7.974 7.974 0 0 0-5.605 2.292zm7.747-2.002L12 8h6.93a8.018 8.018 0 0 0-4.788-3.71zM19.748 10h-4.284l3.465 6.001A7.963 7.963 0 0 0 20 12c0-.69-.088-1.36-.252-2zm-2.143 7.708L15.465 14 12 20a7.974 7.974 0 0 0 5.605-2.292zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.155-12h-2.31l-1.154 2 1.154 2h2.31l1.154-2-1.154-2z"
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
