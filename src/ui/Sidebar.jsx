import {
  LayoutDashboard,
  ListOrdered,
  Settings,
  User,
  Users,
} from "lucide-react";
import Logo from "@/ui/Logo";
import ListItem from "@/ui/ListItem";

export default function Sidebar() {
  return (
    <div className="menu min-h-full w-80 bg-base-100 p-12 text-base-content lg:w-full">
      <div className="ml-5 size-28">
        <Logo />
      </div>
      <ul className="mt-5">
        <ListItem href="" name="Dashboard">
          <LayoutDashboard />
        </ListItem>
        <ListItem href="" name="Customers">
          <Users />
        </ListItem>
        <ListItem href="" name="Orders">
          <ListOrdered />
        </ListItem>
        <ListItem href="" name="Our Staff">
          <User />
        </ListItem>
        <ListItem href="" name="Settings">
          <Settings />
        </ListItem>
      </ul>
    </div>
  );
}
