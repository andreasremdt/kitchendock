import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import Heading from "@tiptap/extension-heading";
import Icon from "@/components/icon";
import Button from "@/components/button";

type Props = {
  value?: JSONContent;
  onCancel: () => void;
  onSave: (content?: JSONContent) => void;
};

export default function Editor({ onCancel, onSave, value }: Props) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "outline-none p-2 bg-primary-50 min-h-[200px]",
      },
    },
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "mb-2",
        },
      }),
      Text,
      Underline,
      Italic,
      Bold,
      Heading.configure({
        HTMLAttributes: {
          class: "uppercase font-sans tracking-widest text-primary-900 font-bold mb-4",
        },
      }),
    ],
    content: value,
  });

  return (
    <>
      <nav className="border border-primary-300 flex gap-x-1 p-1">
        <Button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          selected={editor?.isActive("bold")}
          variant="editor"
          title="Toggle Bold"
        >
          <Icon name="bold" />
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          selected={editor?.isActive("italic")}
          variant="editor"
          title="Toggle Italic"
        >
          <Icon name="italic" />
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          selected={editor?.isActive("underline")}
          variant="editor"
          title="Toggle Underline"
        >
          <Icon name="underline" />
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
          selected={editor?.isActive("heading")}
          variant="editor"
          title="Toggle Heading"
        >
          <Icon name="heading" />
        </Button>
        <Button onClick={onCancel} variant="editor" title="Cancel" className="ml-auto">
          <Icon name="cancel" />
        </Button>
        <Button onClick={() => onSave(editor?.getJSON())} variant="editor" title="Save">
          <Icon name="save" />
        </Button>
      </nav>
      <EditorContent editor={editor} className="border border-primary-300 border-t-0" />
    </>
  );
}
