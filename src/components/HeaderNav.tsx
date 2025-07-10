
import { Menu, Calendar, BookOpen, FileText } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const HeaderNav = () => {
  return (
    <Menubar className="border-0 bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:bg-gray-100 text-bumi-navy font-medium">
          <Menu className="h-4 w-4 mr-2" />
          Menu
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer">
            <Calendar className="h-4 w-4 mr-2" />
            Jadwal Ruang Meeting
          </MenubarItem>
          <MenubarItem className="cursor-pointer">
            <BookOpen className="h-4 w-4 mr-2" />
            Tutorial
          </MenubarItem>
          <MenubarItem className="cursor-pointer">
            <FileText className="h-4 w-4 mr-2" />
            Juklak
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HeaderNav;
