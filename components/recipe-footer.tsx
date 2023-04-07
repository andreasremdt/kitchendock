import Button from "./button";
import Container from "./container";
import Icon from "./icon";

type Props = {
  onSave: () => void;
};

export default function RecipeFooter({ onSave }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-50 border-t border-primary-300 py-2">
      <Container as="footer" className="flex justify-end gap-x-2">
        <Button href="/">
          <Icon name="cancel" /> Cancel
        </Button>
        <Button variant="solid" onClick={onSave}>
          <Icon name="save" /> Save
        </Button>
      </Container>
    </div>
  );
}
