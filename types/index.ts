import { JSONContent } from "@tiptap/react";

export type Measurement = "imperial" | "metric";

export type Temperature = "celsius" | "fahrenheit";

export type Volume = "cups" | "weight" | "volume";

export type Preferences = {
  serves: number;
  measurement: Measurement;
  temperature: Temperature;
  volume: Volume;
};

export type Ingredients = JSONContent;

export type Instructions = JSONContent;

export type Recipe = {
  id: string;
  title: string;
  description?: string;
  category?: string;
  image?: string;
  trashed: boolean;
  ingredients?: Ingredients;
  instructions?: Instructions;
};

export type Node = {
  type: string;
  content: string;
};

export type ParsedIngredient = {
  children: Node[];
  type: string;
  content: string;
};

export type AuthUserFields = {
  name?: string;
  email: string;
  password: string;
  remember: boolean;
};
