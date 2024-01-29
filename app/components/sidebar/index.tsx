"use client";

import { usePathname } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "../box";
import SidebarItem from "../sidebarItem";
import Library from "../library";
import getTracks, { Track } from "@/app/services/tracks";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTracks = await getTracks();
        setTracks(fetchedTracks);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/',
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/home',
      href: '/search',
    },
  ], [pathname]);

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2 ">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library tracks={tracks} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto p-2">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
