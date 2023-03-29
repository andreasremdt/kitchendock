import Button from "@/components/button";
import Icon from "@/components/icon";

type Props = {
  editing?: boolean;
  onEdit?: () => void;
  onSave?: () => void;
};

export default function RecipeMenuBar({ editing, onEdit, onSave }: Props) {
  return (
    <div className="bg-primary-50 sticky top-0 h-12 flex items-center z-10 border-b border-primary-300">
      <div className="container mx-auto flex">
        <Button href="/">
          <Icon name="chevronLeft" /> Go Back
        </Button>

        <div className="ml-auto flex gap-x-2">
          {onEdit && (
            <Button onClick={onEdit} selected={editing}>
              <Icon name={editing ? "check" : "fileEdit"} />
              {editing ? "Finish Editing" : "Enable Edit Mode"}
            </Button>
          )}

          {onSave && (
            <Button onClick={onSave}>
              <Icon name="save" /> Save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
