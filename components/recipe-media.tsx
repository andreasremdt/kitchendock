import Image from "next/image";
import { Recipe } from "@/types";
import Icon from "./icon";
import Button from "./button";
import Typography from "./typography";

type Props = {
  recipe: Partial<Recipe>;
  editing: boolean;
};

export default function RecipeMedia({ editing, recipe }: Props) {
  return (
    <div className="container mx-auto relative">
      {recipe.image && (
        <>
          <Image
            src={recipe.image}
            alt={recipe.title || ""}
            width={1024}
            height={768}
            className="aspect-video object-cover"
          />
          {editing && (
            <div className="absolute top-2 right-2 flex gap-x-1">
              <button
                type="button"
                title="Edit"
                className="bg-primary-700 text-primary-50 p-2 hover:bg-primary-900 focus-visible:bg-primary-900"
              >
                <Icon name="edit" width={32} height={32} />
              </button>
              <button
                type="button"
                title="Delete"
                className="bg-primary-700 text-primary-50 p-2 hover:bg-primary-900 focus-visible:bg-primary-900"
              >
                <Icon name="cancel" width={32} height={32} />
              </button>
            </div>
          )}
        </>
      )}

      {!recipe.image && editing && (
        <div className="border border-primary-300 bg-upload flex items-center justify-center flex-col px-4 py-8">
          <Icon name="image" width={48} height={48} className="text-primary-300" />
          <Typography className="my-4">
            You can upload an image by dragging and dropping it onto this area, or by clicking the below button.
          </Typography>
          <Button>Add Image or Video</Button>
        </div>
      )}
    </div>
  );
}
