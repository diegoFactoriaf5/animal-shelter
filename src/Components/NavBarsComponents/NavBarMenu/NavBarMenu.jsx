import React from 'react'
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const navListMenuItems = [
  {
    title: "Noticias",
    url:"/news",
  },
  {
    title: "Contacto",
    url:"/contact",
  },
];

function NavBarMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, url }) => (
    <Link to={url} key={title}>
      <MenuItem>
        <Typography variant="h5" color="blue-gray" className="font-normal text-base md:text-lg lg:text-xl">
          {title}
        </Typography>   
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="h5" className="font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              Páginas
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>

        <MenuList
          {...triggers}
          className="hidden  grid-cols-7 gap-3 overflow-visible lg:grid"
        >
            
          <ul className="lg:col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

<ul className="flex w-full flex-col gap-1 lg:hidden">
    
          {renderItems}
        
</ul>
        
        
    </React.Fragment>
  );
}

export default NavBarMenu