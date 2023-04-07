import { units } from "@/lang/en";

export default function getUnit(value: string) {
  const unit = Object.entries(units).find(([unit, dictionary]) => {
    return dictionary.some((word) => word === value.toLocaleLowerCase());
  });

  return unit ? unit[0] : false;
}
