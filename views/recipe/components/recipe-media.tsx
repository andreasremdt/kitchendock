import Image from "next/image";
import { Recipe } from "@/types";
import Icon from "@/components/icon";
import Button from "@/components/button";
import EmptyState from "@/components/empty-state";
import Skeleton from "@/components/skeleton";
import cx from "classnames";
import { ChangeEvent, FormEvent, useState } from "react";
import { toBase64 } from "@/lib/helpers";
import fetcher from "@/lib/fetcher";
import MediaSelector from "./media-selector";

type Props = {
  recipe?: Partial<Recipe>;
  loading?: boolean;
  locked?: boolean;
};

export default function RecipeMedia({ locked, loading, recipe }: Props) {
  async function handleUpload(image: string) {
    const response = await fetcher("POST", "/api/image-upload", {
      image,
    });

    console.log(response);
  }

  return <MediaSelector onUpload={handleUpload} />;

  // if (loading) {
  //   return <Skeleton className="h-96 bg-primary-200 container mx-auto" />;
  // }

  // if (!recipe?.image && !locked) {
  //   return (
  //     <div className="container mx-auto">
  //       <EmptyState
  //         icon="image"
  //         text="You can upload an image by dragging and dropping it onto this area, or by clicking the below button."
  //       >
  //         <Button>Add Image or Video</Button>
  //       </EmptyState>
  //     </div>
  //   );
  // }

  // if (recipe?.image) {
  //   return (
  //     <div
  //       className={cx("container mx-auto", {
  //         "relative group hover:scale-[1.01] transition-transform": !locked,
  //       })}
  //     >
  //       <Image
  //         src={recipe.image}
  //         alt={recipe.title || ""}
  //         width={1024}
  //         height={768}
  //         className="aspect-video object-cover w-full"
  //       />
  //       {!locked && (
  //         <button
  //           type="button"
  //           className="absolute opacity-0 transition-opacity group-hover:opacity-100 inset-0 bg-primary-200/50 border border-primary-300 w-full"
  //         >
  //           <Icon
  //             name="edit"
  //             width={48}
  //             height={48}
  //             className="text-primary-600 border p-2 border-primary-300 bg-primary-50 absolute top-1 right-1"
  //           />
  //         </button>
  //       )}
  //     </div>
  //   );
  // }

  // return null;
}
