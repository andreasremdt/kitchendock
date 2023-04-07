import { useState } from "react";
import cx from "classnames";
import Icon from "@/components/icon";
import Button from "@/components/button";
import { Preferences } from "@/types";
import Container from "@/components/container";

type Props = {
  locked?: boolean;
};

export default function RecipeBar({ locked }: Props) {
  const [preferences, setPreferences] = useState<Preferences>({
    serves: 1,
    measurement: "metric",
    temperature: "celsius",
    volume: "weight",
  });

  function handleDecrease() {
    if (preferences.serves > 1) {
      setPreferences((prev) => ({
        ...prev,
        serves: prev.serves - 1,
      }));
    }
  }

  return (
    <nav className="py-1 border-b z-10 border-primary-300 sticky top-12 bg-primary-100">
      <Container className="flex">
        <div className="flex items-center">
          <Button title="Decrease serves" onClick={handleDecrease}>
            <Icon name="minus" width={18} height={18} />
          </Button>
          <span className="border-x border-primary-300 block px-2 mx-1 font-sans font-bold uppercase text-xs tracking-widest">
            {preferences.serves} serve{preferences.serves > 1 && "s"}
          </span>
          <Button
            title="Increase serves"
            onClick={() => setPreferences((prev) => ({ ...prev, serves: prev.serves + 1 }))}
          >
            <Icon name="plus" width={18} height={18} />
          </Button>
        </div>

        <div className="flex gap-x-1 border-r border-primary-300 mr-2 pr-2 ml-auto">
          <Button
            onClick={() => setPreferences((prev) => ({ ...prev, volume: "volume" }))}
            selected={preferences.volume === "volume"}
          >
            Volume
          </Button>
          <Button
            onClick={() => setPreferences((prev) => ({ ...prev, volume: "weight" }))}
            selected={preferences.volume === "weight"}
          >
            Weight
          </Button>
          <Button
            onClick={() => setPreferences((prev) => ({ ...prev, volume: "cups" }))}
            selected={preferences.volume === "cups"}
          >
            Cups
          </Button>
        </div>

        <div className="flex gap-x-1 border-r border-primary-300 mr-2 pr-2">
          <Button
            onClick={() => setPreferences((prev) => ({ ...prev, measurement: "imperial" }))}
            selected={preferences.measurement === "imperial"}
          >
            Imperial
          </Button>
          <Button
            onClick={() => setPreferences((prev) => ({ ...prev, measurement: "metric" }))}
            selected={preferences.measurement === "metric"}
          >
            Metric
          </Button>
        </div>

        <div className="flex gap-x-1">
          <Button
            onClick={() => setPreferences((prev) => ({ ...prev, temperature: "fahrenheit" }))}
            className={cx({
              "text-primary-900": preferences.temperature === "fahrenheit",
            })}
          >
            °F
          </Button>
          <Button
            onClick={() => setPreferences((prev) => ({ ...prev, temperature: "celsius" }))}
            className={cx({
              "text-primary-900": preferences.temperature === "celsius",
            })}
          >
            °C
          </Button>
        </div>
      </Container>
    </nav>
  );
}
