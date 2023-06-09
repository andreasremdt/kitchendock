import cx from "classnames";
import { Container, Button, Icon } from "@/components";
import usePreferences from "@/hooks/use-preferences";

type Props = {
  locked?: boolean;
};

export default function RecipeBar({ locked }: Props) {
  const { preferences, update } = usePreferences();

  function handleDecrease() {
    if (preferences.serves > 1) {
      update({ serves: preferences.serves - 1 });
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
          <Button title="Increase serves" onClick={() => update({ serves: preferences.serves + 1 })}>
            <Icon name="plus" width={18} height={18} />
          </Button>
        </div>

        <div className="flex gap-x-1 border-r border-primary-300 mr-2 pr-2 ml-auto">
          <Button onClick={() => update({ volume: "volume" })} selected={preferences.volume === "volume"}>
            Volume
          </Button>
          <Button onClick={() => update({ volume: "weight" })} selected={preferences.volume === "weight"}>
            Weight
          </Button>
          <Button onClick={() => update({ volume: "cups" })} selected={preferences.volume === "cups"}>
            Cups
          </Button>
        </div>

        <div className="flex gap-x-1 border-r border-primary-300 mr-2 pr-2">
          <Button onClick={() => update({ measurement: "imperial" })} selected={preferences.measurement === "imperial"}>
            Imperial
          </Button>
          <Button onClick={() => update({ measurement: "metric" })} selected={preferences.measurement === "metric"}>
            Metric
          </Button>
        </div>

        <div className="flex gap-x-1">
          <Button
            onClick={() => update({ temperature: "fahrenheit" })}
            className={cx({
              "text-primary-900": preferences.temperature === "fahrenheit",
            })}
          >
            °F
          </Button>
          <Button
            onClick={() => update({ temperature: "celsius" })}
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
