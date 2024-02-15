import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { BellIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "./theme-toggle";

const UserCard = ({}) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <div className="flex gap-4">
          <ThemeToggle></ThemeToggle>
          <Button size="icon" variant="ghost">
            <InfoCircledIcon className="h-5 w-5"></InfoCircledIcon>
          </Button>
          <Button size="icon" variant="ghost">
            <BellIcon className="h-5 w-5"></BellIcon>
          </Button>
        </div>
        <div className="flex flex-col justify-end mt-1">
          <p className="text-sm font-medium leading-none">
            HI, <span className="text-green-400">Ravi Pandey</span>
          </p>
          <p className="text-sm text-muted-foreground">Welcome Back!</p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="/avatars/01.png" alt="Image" />
          <AvatarFallback>RP</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default UserCard;
