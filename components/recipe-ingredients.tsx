import Typography from "@/components/typography";
import { Ingredients } from "@/types";

type Props = {
  ingredients: Ingredients;
};

export default function RecipeIngredients({ ingredients }: Props) {
  return (
    <section className="container mx-auto py-12">
      <Typography as="h2" variant="h3">
        Ingredients
      </Typography>

      <div className="flex mt-6 gap-x-8 flex-wrap">
        {ingredients.map((group) => (
          <div key={group.title} className="flex-1">
            {group.title && (
              <Typography as="h3" variant="h5" className="mb-3">
                {group.title}
              </Typography>
            )}

            <ul>
              {group.children.map((ingredient) => (
                <li className="py-2 border-b border-primary-300 last-of-type:border-b-0" key={ingredient}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
