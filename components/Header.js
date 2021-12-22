import React from "react";
import Image from "next/image";
import {
  CollectionIcon,
  HomeIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/solid";
import HeaderIcons from "./Header-Icons";

const icons = [
  {
    id: "a",
    Icon: HomeIcon,
    title: "HOME",
  },
  {
    id: "b",
    Icon: CollectionIcon,
    title: "Collection",
  },
  {
    id: "c",
    Icon: BadgeCheckIcon,
    title: "Check",
  },
  {
    id: "d",
    Icon: LightningBoltIcon,
    title: "Light",
  },
  {
    id: "e",
    Icon: UserIcon,
    title: "User",
  },
  {
    id: "f",
    Icon: SearchIcon,
    title: "User",
  },
];
function Header() {
  const Head_icons = icons.map((icon) => (
    <HeaderIcons key={icon.id} Icon={icon.Icon} title={icon.title} />
  ));

  return (
    <header className="flex flex-col m-5 h-auto sm:flex-row  justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {Head_icons}
      </div>

      <div>
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
        />
      </div>
    </header>
  );
}

export default Header;
