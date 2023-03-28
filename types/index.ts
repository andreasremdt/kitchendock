export type Measurement = "imperial" | "metric";

export type Temperature = "celsius" | "fahrenheit";

export type Volume = "cups" | "weight" | "volume";

export type Preferences = {
  serves: number;
  measurement: Measurement;
  temperature: Temperature;
  volume: Volume;
};

export type Ingredient = string;

export type Ingredients = {
  title?: string;
  children: Ingredient[];
}[];

export type Instructions = string[];
