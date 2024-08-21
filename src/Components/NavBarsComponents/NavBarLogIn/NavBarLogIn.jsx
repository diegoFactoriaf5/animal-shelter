import React, { useEffect, useState } from 'react'
import { Typography, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar } from "@material-tailwind/react";
import { UserCircleIcon, ChevronDownIcon, Cog6ToothIcon, PowerIcon, } from "@heroicons/react/24/outline";

import LogIn from '../../../Assets/Pictures/LogInICON.svg'
import { NavLink } from 'react-router-dom';
import AuthService from '../../../Services/AuthService';
import EventBus from "../../../Common/EventBus";

// profile menu component
const profileMenuItems = [
  {
    label: "LogIn",
    icon: UserCircleIcon,
    url: "/login",
    state: false,
    event: false
  },
  {
    label: "Panel Administrador",
    icon: Cog6ToothIcon,
    url: "/admin",
    state: true,
    event: false
  },
  {
    label: "LogOut",
    icon: PowerIcon,
    url: "",
    state: true,
    event: true
  },
];

function NavBarLogIn() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);



  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setShowAdminBoard(user.roles.includes("ADMIN"));
    }

    EventBus.on("logout", handleLogout);

  }, [setShowAdminBoard])

  useEffect(() => {
    EventBus.remove("logout", handleLogout);

  }, [])


  const handleLogout = () => {
    AuthService.logout();
    setShowAdminBoard(false);
  };


  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className=""
            src={LogIn}
          />

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, url, state, event }, key) => {
          
          const isLastItem = key === profileMenuItems.length - 1;

          const admin = state 
          return (
            
            <React.Fragment key={key}>
                  
              {admin === showAdminBoard &&
                  
                <NavLink to={url}>
                  <MenuItem
                    key={key}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded  ${isLastItem
                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                        : ""
                      }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="h6"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                      onClick={event ? handleLogout : undefined}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                </NavLink>

              }
            </React.Fragment>
          )
        })}
      </MenuList>
    </Menu>
  );
}


export default NavBarLogIn