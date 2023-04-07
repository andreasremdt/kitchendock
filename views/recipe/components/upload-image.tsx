import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { Icon, Button, Typography } from "@/components";
import { toBase64 } from "@/lib/helpers";

type Props = {
  onUpload: (data: string) => void;
};

export default function UploadImage({ onUpload }: Props) {
  const [preview, setPreview] = useState<Blob | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const [image] = event.currentTarget.files as FileList;

    if (image) {
      setPreview(image);
    }
  }

  function handleOpenExplorer() {
    inputRef.current?.click();
  }

  async function handleSubmit() {
    if (inputRef.current) {
      const [image] = inputRef.current.files as FileList;

      onUpload(await toBase64(image));
    }
  }

  return (
    <>
      {preview && (
        <Image
          src={URL.createObjectURL(preview)}
          alt="Image preview"
          fill
          className="object-cover object-center opacity-30 -z-10"
        />
      )}
      <Icon name="upload" className="text-primary-400" width={56} height={56} />
      <Typography className="my-4">
        Choose an image from your computer or drag and drop the image into this area.
      </Typography>
      <input type="file" className="sr-only" ref={inputRef} onChange={handleChange} />

      <div className="flex gap-x-px">
        <Button variant="solid" onClick={handleOpenExplorer}>
          {preview ? "Select Another" : "Select"}
        </Button>
        {preview && (
          <>
            <Button variant="solid" onClick={() => setPreview(null)}>
              Remove Image
            </Button>
            <Button variant="solid" onClick={handleSubmit}>
              Upload
            </Button>
          </>
        )}
      </div>
    </>
  );
}
