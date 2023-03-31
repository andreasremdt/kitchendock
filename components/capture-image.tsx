import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import Icon from "@/components/icon";
import Typography from "@/components/typography";
import { Dialog } from "@headlessui/react";
import ErrorState from "@/components/error-state";

type Props = {
  onUpload: (data: string) => void;
};

export default function CaptureImage({ onUpload }: Props) {
  const [visible, setVisible] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stream = useRef<MediaStream | null>(null);

  function handleCanPlay() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const width = window.outerWidth;
      const height = (video.videoHeight / video.videoWidth) * width;

      video.setAttribute("width", width.toString());
      video.setAttribute("height", height.toString());
      canvas.setAttribute("width", width.toString());
      canvas.setAttribute("height", height.toString());
    }
  }

  function stopStream() {
    if (stream.current) {
      stream.current.getTracks().forEach((track) => track.stop());
    }
  }

  async function startStream() {
    const video = videoRef.current;

    if (video) {
      try {
        stream.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

        video.srcObject = stream.current;
        video.play();

        setError(null);
      } catch (ex) {
        setError(
          "You either don't have any camera connected to this device, or the app is not allowed to use it. Make sure that the camera is connected, enabled, and that the app has permissions to access it." +
            (ex as Error).message
        );
        console.log(ex);
      }
    }
  }

  function handleTakePhoto() {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;

      canvas.width = video.width;
      canvas.height = video.height;

      context.drawImage(video, 0, 0, video.width, video.height);

      setPreview(canvas.toDataURL("image/png"));
      setVisible(false);
    }
  }

  async function handleSubmit() {
    if (preview) {
      onUpload(preview);
    }
  }

  useEffect(() => {
    if (visible) {
      startStream();

      return () => stopStream();
    }
  }, [visible]);

  return (
    <>
      <Dialog open={visible} onClose={() => setVisible(false)}>
        <Dialog.Panel className="bg-black fixed inset-0 z-10">
          <Dialog.Title className="sr-only">Take a Photo</Dialog.Title>
          <canvas ref={canvasRef} className="sr-only" />
          <video ref={videoRef} onCanPlay={handleCanPlay} className="w-full h-full z-10" />

          {error && <ErrorState icon="sad">{error}</ErrorState>}

          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 hover:scale-110 transition-transform text-white cursor-pointer"
          >
            <Icon name="cancel" width={48} height={48} />
          </button>
          <button
            onClick={handleTakePhoto}
            className="absolute bottom-5 cursor-pointer hover:scale-110 transition-transform left-1/2 text-white"
          >
            <Icon name="lens" width={48} height={48} />
          </button>
        </Dialog.Panel>
      </Dialog>

      {preview && (
        <Image src={preview} alt="Image preview" fill className="object-cover object-center opacity-30 -z-10" />
      )}

      <Icon name="camera" className="text-primary-400" width={56} height={56} />
      <Typography className="my-4">
        Take a photo with the camera of your smartphone or computer. Press the button to get started.
      </Typography>

      <div className="flex gap-x-px">
        <Button variant="solid" onClick={() => setVisible(true)}>
          {preview ? "Take Another" : "Take Photo"}
        </Button>
        {preview && (
          <>
            <Button variant="solid" onClick={() => setPreview(null)}>
              Remove Photo
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
