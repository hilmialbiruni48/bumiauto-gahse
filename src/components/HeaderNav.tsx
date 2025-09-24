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
          <MenubarItem className="cursor-pointer p-0">
            <a
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQdRJmcvhaMRzJAOHNiQgKTenV6BLNteoN5s2EW3eaVxBZHH682XulazjxYpDSgvTaG5rFI60mWRTOP/pubhtml?gid=1628892010&single=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full px-3 py-2 text-inherit"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Jadwal Ruang Meeting
            </a>
          </MenubarItem>
          <MenubarItem className="cursor-pointer p-0">
            <a
              href="https://helpdesk.bumiauto.works/FAQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full px-3 py-2 text-inherit"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Tutorial
            </a>
          </MenubarItem>
          <MenubarItem className="cursor-pointer p-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full px-3 py-2 text-inherit"
            >
              <FileText className="h-4 w-4 mr-2" />
              Juklak
            </a>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HeaderNav;
