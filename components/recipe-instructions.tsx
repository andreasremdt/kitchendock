import { Instructions } from "@/types";
import Typography from "./typography";

type Props = {
  instructions: Instructions;
};

export default function RecipeInstructions({ instructions }: Props) {
  return (
    <section className="container mx-auto my-12">
      <Typography as="h2" variant="h3">
        Instructions
      </Typography>

      <ol className="max-w-lg mx-auto mt-6">
        {instructions.map((instruction, index) => (
          <li key={instruction} className="mb-12 last-of-type:mb-0 flex gap-x-8">
            <span className="font-bold text-5xl text-primary-700">{index + 1}</span>
            {instruction}
          </li>
        ))}
      </ol>
    </section>
  );
}
