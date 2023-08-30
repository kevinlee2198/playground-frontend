'use client';

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import NextLink from 'next/link';
import PlaygroundLogo from '../logo/PlaygroundLogo';

function PlaygroundNavbar(): JSX.Element {
  const isLoggedIn = true;
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" color="foreground" as={NextLink}>
          <PlaygroundLogo />
        </Link>
        <Link href="/" color="foreground" as={NextLink}>
          <p className="font-bold text-inherit">Playground</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isLoggedIn ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Dropdown>
                <DropdownTrigger>
                  <Avatar name="Current User" />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="profile">
                    <Link href="/profile" as={NextLink}>
                      Profile
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="signout">Sign Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login" as={NextLink}>
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={NextLink} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}

export default PlaygroundNavbar;
