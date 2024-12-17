"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  LogOut,
  Menu,
  X,
  User,
  UserPlus,
  Church,
  Calendar1,
  Coins,
  SignpostBig,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const ChurchMemberSidebar = () => {
  const pathname = usePathname();
  const path = pathname?.split("/")[2];
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const router = useRouter();

  const SIDEBAR_LINKS = [
    {
      key: "profile",
      label: "My profile",
      icon: <User size={25} color="#8A8A8A" />,
      href: "/church-member/church-member-profile",
    },
    {
      key: "church_profile",
      label: "Church Profile",
      icon: <Church size={25} color="#8A8A8A" />,
      href: "/churches/2",
    },
    {
      key: "event",
      label: "Event",
      icon: <Calendar1 size={25} color="#8A8A8A" />,
      href: "/church-member/my-event",
    },

    {
      key: "prayerRequest",
      label: "My network",
      icon: <UserPlus size={25} color="#8A8A8A" />,
      href: "/church-member/church-member-network",
    },
    {
      key: "sponsorChurch",
      label: "Sponsor a church",
      icon: <Coins size={25} color="#8A8A8A" />,
      href: "/church-member/sponsor-church",
    },
    {
      key: "prayerRequest",
      label: "Prayer Request",
      icon: <SignpostBig size={25} color="#8A8A8A" />,
      href: "/church-member/my-prayer",
    },
  ];

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close the sidebar when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById("dashboardSidebar");
    if (sidebar && !sidebar.contains(event.target as Node)) {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div>
      {/* Menu Toggle Button for mobile/tablet devices */}
      <div className="p-4 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700"
        >
          {isSidebarVisible ? <X size={28} /> : <Menu size={28} />}{" "}
          {/* Toggle between Menu and Close (X) icons */}
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="dashboardSidebar"
        className={`fixed inset-y-0 left-0 z-30 xl:z-10 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:transform-none lg:shadow-none ${
          isSidebarVisible
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="rounded-lg border border-[#E6E6E6]  bg-white py-2 px-2">
          <div className="space-y-2">
            {SIDEBAR_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={cn(
                  "flex items-center gap-x-3 px-5 py-3 text-lg text-gray-scale-600 transition-all duration-300 ease-in-out",
                  pathname === link.href &&
                    "bg-primary-sky text-black font-medium rounded",
                  link.href.includes(path) &&
                    "bg-primary-sky text-black rounded font-medium"
                )}
              >
                {link.icon}
                <span className="text-black/70">{link.label}</span>
              </Link>
            ))}

            <button
              onClick={() => {
                router.push("/sign-in");
                localStorage.removeItem("user");
              }}
              type="button"
              className="flex items-center gap-x-3 px-5 py-4 text-lg text-gray-scale-600"
            >
              <LogOut size={25} color="#8A8A8A" />
              <span className="text-black/70">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchMemberSidebar;
