import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";

import { useAuth } from "../../app/hooks/useAuth";
import { getStringInitials } from "../../app/utils/getStringInitials";

export function UserMenu() {
  const { user, signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-cyan-50 rounded-full w-12 h-12 flex items-center justify-center border border-cyan-100 cursor-pointer hover:border-cyan-200 transition-all">
          <span className="text-sm tracking-[-0.5px] text-cyan-900 font-medium">
            {getStringInitials(user?.name)}
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          className="flex items-center justify-between"
          onSelect={signout}
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}