import { useState } from "react";
import cx from "classnames";
import Icon from "@/components/icon";
import Button from "@/components/button";
import { Preferences } from "@/types";

export default function RecipeBar() {
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
    <nav className="py-1 border-b border-primary-300 sticky top-0 bg-primary-100">
      <div className="container mx-auto flex">
        <div className="flex items-center mr-auto">
          <Button title="Decrease serves" onClick={handleDecrease}>
            <Icon name="minus" />
          </Button>
          <span className="border-x border-primary-300 block px-2 mx-1 font-sans font-bold uppercase text-xs tracking-widest">
            {preferences.serves} serve{preferences.serves > 1 && "s"}
          </span>
          <Button
            title="Increase serves"
            onClick={() => setPreferences((prev) => ({ ...prev, serves: prev.serves + 1 }))}
          >
            <Icon name="plus" />
          </Button>
        </div>

        <div className="flex gap-x-1 border-r border-primary-300 mr-2 pr-2">
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
      </div>
    </nav>
  );
}
