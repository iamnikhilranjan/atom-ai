"use client";

import * as React from "react";
import { getAurinkoAuthUrl } from "@/lib/aurinko"; // Ensure correct function import
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/trpc/react"; // Ensure correct path for your TRPC API
import { useLocalStorage } from "usehooks-ts";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface AccountSwitcherProps {
  isCollapsed: boolean;
}

export function AccountSwitcher({ isCollapsed }: AccountSwitcherProps) {
  const { data: accounts } = api.mail.getAccounts.useQuery(); // Fetch accounts
  const [accountId, setAccountId] = useLocalStorage("accountId", "");

  React.useEffect(() => {
    if (accounts && accounts.length > 0) {
      if (accountId) return; // Use stored accountId
      setAccountId(accounts[0]?.id); // Default to the first account
    } else if (accounts && accounts.length === 0) {
      toast("Link an account to continue", {
        action: {
          label: "Add account",
          onClick: async () => {
            try {
              const url = await getAurinkoAuthUrl("Google"); // Ensure this matches your API
              window.location.href = url; // Redirect for account linking
            } catch (error) {
              toast.error((error as Error).message);
            }
          },
        },
      });
    }
  }, [accounts, accountId, setAccountId]);

  if (!accounts) return <></>; // Handle cases where accounts aren't fetched yet

  return (
    <div className="items-center gap-2 flex w-full">
      <Select defaultValue={accountId} onValueChange={setAccountId}>
        <SelectTrigger
          className={cn(
            "flex w-full flex-1 items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
            isCollapsed &&
              "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
          )}
          aria-label="Select account"
        >
          <SelectValue placeholder="Select an account">
            <span className={cn({ hidden: !isCollapsed })}>
              {accounts.find((account) => account.id === accountId)
                ?.emailAddress[0]} {/* Display first character */}
            </span>
            <span className={cn("ml-2", isCollapsed && "hidden")}>
              {accounts.find((account) => account.id === accountId)
                ?.emailAddress} {/* Full email address */}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {accounts.map((account) => (
            <SelectItem key={account.id} value={account.id}>
              <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                {account.emailAddress}
              </div>
            </SelectItem>
          ))}
          <div
            onClick={async () => {
              try {
                const url = await getAurinkoAuthUrl("Google"); // Add account flow
                window.location.href = url;
              } catch (error) {
                toast.error((error as Error).message);
              }
            }}
            className="relative flex hover:bg-gray-50 w-full cursor-pointer items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <Plus className="size-4 mr-1" />
            Add account
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}
