import { Dropdown, Icon, Button } from "@/components";

export default function CreateRecipeDropdown() {
  return (
    <div className="flex items-center gap-x-px justify-center">
      <Button variant="solid" href="/recipe/create">
        Create New Recipe
      </Button>
      <Dropdown>
        <Dropdown.Button as={Button} title="Options" variant="solid">
          <Icon name="chevronDown" />
        </Dropdown.Button>
        <Dropdown.Items className="right-0">
          <Dropdown.Item>
            {({ active }) => (
              <Button className="py-2 px-4" selected={active} href="/recipe/create">
                <Icon name="draft" width={16} height={16} /> Create From Scratch
              </Button>
            )}
          </Dropdown.Item>
          <Dropdown.Item>
            {({ active }) => (
              <Button className="py-2 px-4" selected={active} href="/recipe/create">
                <Icon name="globe" width={16} height={16} /> Import From Website
              </Button>
            )}
          </Dropdown.Item>
          <Dropdown.Item>
            {({ active }) => (
              <Button className="py-2 px-4" selected={active} href="/recipe/create">
                <Icon name="image" width={16} height={16} /> Import From Photo
              </Button>
            )}
          </Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>
    </div>
  );
}
