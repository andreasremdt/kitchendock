import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import Heading from "@tiptap/extension-heading";
import { Button, Icon } from "@/components";
import { transformHeadingsTo } from "@/lib/parser";
import { useEffect, useRef } from "react";

type Props = {
  value?: JSONContent;
  placeholder?: string;
  onCancel: () => void;
  onSave: (content?: JSONContent) => void;
};

export default function Editor({ onCancel, onSave, value, placeholder }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "outline-none p-2 bg-primary-50 min-h-[200px]",
      },
      transformPastedHTML(html: string) {
        return transformHeadingsTo("h3", html);
      },
    },
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "mb-2",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      Text,
      Underline,
      Italic,
      Bold,
      Heading.configure({
        levels: [3],
        HTMLAttributes: {
          class: "uppercase font-sans tracking-widest text-primary-900 font-bold mb-4",
        },
      }),
    ],
    content: value,
  });

  useEffect(() => {
    if (editorRef.current) {
      const { top } = editorRef.current.getBoundingClientRect();

      setTimeout(() => {
        window.scrollTo({
          top: top + window.pageYOffset - 35 - 48 - 10,
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <>
      <nav className="border border-primary-300 flex gap-x-1 p-1" ref={editorRef}>
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
