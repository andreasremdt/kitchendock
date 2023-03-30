import Button from "@/components/button";
import Icon from "@/components/icon";
import Dropdown from "@/components/dropdown";
import { ReactNode } from "react";
import Router from "next/router";
import fetcher from "@/lib/fetcher";

type Props = {
  children?: ReactNode;
};

export default function MenuBar({ children }: Props) {
  function handleLogout() {
    fetcher("POST", "/api/auth/signout")
      .then(() => Router.push("/signin"))
      .catch(console.log);
  }

  return (
    <div className="bg-primary-50 sticky top-0 h-12 flex items-center z-10 border-b border-primary-300">
      <div className="container mx-auto flex items-center gap-x-2">
        <Dropdown>
          <Dropdown.Button as={Button}>
            <Icon name="list" width={16} height={16} /> Recipes <Icon name="chevronDown" />
          </Dropdown.Button>
          <Dropdown.Items className="-left-2">
            <Dropdown.Item>
              {({ active }) => (
                <Button className="py-2 px-4" selected={active} href="/">
                  <Icon name="list" width={16} height={16} /> My Recipes
                </Button>
              )}
            </Dropdown.Item>
            <Dropdown.Item>
              {({ active }) => (
                <Button className="py-2 px-4" selected={active} href="/recipe/create">
                  <Icon name="plus" width={16} height={16} /> Create New Recipe
                </Button>
              )}
            </Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>

        <div className="ml-auto flex gap-x-2">
          {children}
          <Dropdown>
            <Dropdown.Button as={Button}>
              <Icon name="user" width={16} height={16} /> Andreas Remdt <Icon name="chevronDown" />
            </Dropdown.Button>
            <Dropdown.Items className="right-0">
              <Dropdown.Item>
                {({ active }) => (
                  <Button className="py-2 px-4" selected={active} onClick={handleLogout}>
                    <Icon name="logout" width={16} height={16} /> Logout
                  </Button>
                )}
              </Dropdown.Item>
            </Dropdown.Items>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
