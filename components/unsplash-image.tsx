import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import Icon from "@/components/icon";
import Typography from "@/components/typography";
import Input from "@/components/input";
import fetcher from "@/lib/fetcher";
import Error from "@/components/error";

type Props = {
  onUpload: (data: string) => void;
};

export default function UnsplashImage({ onUpload }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOpenExplorer() {
    inputRef.current?.click();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (search.length) {
      const response = await fetcher("GET", `/api/image-search?query=${search.toLowerCase()}`);

      if (response.results.length > 0) {
        setPreview(null);
        setResults(response.results);
      } else {
        setError("No images found.");
      }
    }
  }

  function handleUpload() {
    if (preview) {
      onUpload(preview);
    }
  }

  return (
    <>
      {preview && (
        <Image src={preview} alt="Image preview" fill className="object-cover object-center opacity-30 -z-10" />
      )}

      <Icon name="unsplash" className="text-primary-400 flex-shrink-0" width={56} height={56} />
      <Typography className="my-4">Choose a stock photo from Unsplash. Just type some keywords to look for.</Typography>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-px">
          <Input
            placeholder="tomato soup"
            autoFocus
            onChange={(event) => setSearch(event.currentTarget.value)}
            value={search}
          />
          <Button type="submit" variant="solid" onClick={handleOpenExplorer}>
            Search
          </Button>
          {preview && (
            <Button type="button" variant="solid" onClick={handleUpload}>
              Upload
            </Button>
          )}
        </div>
        {error && <Error>{error}</Error>}
      </form>

      {results.length > 0 && (
        <div className="grid grid-cols-4 gap-4 mt-8">
          {results.map((result) => (
            <button
              type="submit"
              key={result.id}
              onClick={() => {
                setResults([]);
                setPreview(result.urls.regular);
              }}
              className="aspect-square hover:scale-105 transition-transform"
            >
              <Image
                src={result.urls.small}
                alt={result.alt_description}
                width={192}
                height={192}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
