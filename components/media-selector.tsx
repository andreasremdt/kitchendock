import { Tab } from "@headlessui/react";
import Button from "@/components/button";
import Icon from "@/components/icon";
import CaptureImage from "@/components/capture-image";
import UploadImage from "@/components/upload-image";
import UnsplashImage from "@/components/unsplash-image";

type Props = {
  onUpload: (data: string) => void;
};

export default function MediaSelector({ onUpload }: Props) {
  return (
    <Tab.Group as="div" className="container mx-auto border border-primary-300 flex h-96">
      <Tab.List className="bg-primary-50 border-r border-primary-300 flex flex-col justify-center flex-shrink-0">
        <Tab as={Button} className="py-4 px-8">
          <Icon name="upload" />
          From computer
        </Tab>
        <Tab as={Button} className="py-4 px-8">
          <Icon name="camera" />
          From camera
        </Tab>
        <Tab as={Button} className="py-4 px-8">
          <Icon name="unsplash" />
          From Unsplash
        </Tab>
        <Tab as={Button} className="py-4 px-8">
          <Icon name="video" />
          Link Video
        </Tab>
        <Tab as={Button} className="py-4 px-8">
          <Icon name="robot" />
          Generate
        </Tab>
      </Tab.List>
      <Tab.Panels className="flex-1 flex">
        <Tab.Panel className="flex justify-center items-center flex-col flex-1 relative">
          <UploadImage onUpload={onUpload} />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center items-center flex-col flex-1 relative">
          <CaptureImage onUpload={onUpload} />
        </Tab.Panel>
        <Tab.Panel className="p-4 relative overflow-y-auto flex items-center flex-col flex-1 justify-center">
          <UnsplashImage onUpload={onUpload} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
