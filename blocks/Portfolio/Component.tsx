// PortfolioList.js

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { MediaType } from '../../collections/Media';


interface PortfolioItem {
  id: string;
  title: string;
  image: MediaType;
  // Add any other necessary properties here
}

export type Type = {
  blockType: 'portfolio';
  blockName?: string;
  content: {
    items: PortfolioItem[];
  };
}

const PortfolioList: React.FC<PortfolioListProps> = ({ content: { items } }) => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(-1);

  const handleItemHover = (index: number) => {
    setHoveredItemIndex(index);
  };

  const handleItemLeave = () => {
    setHoveredItemIndex(-1);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="relative">
          <h2 className="font-bold text-lg">
            {hoveredItemIndex !== -1
              ? items[hoveredItemIndex]?.title
              : items[0].title}
          </h2>
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
            style={{
              backgroundImage: `url(${
                hoveredItemIndex !== -1
                  ? items[hoveredItemIndex]?.image
                  : items[0].image
              })`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 lg:w-2/3">
        {items.map((item, index) => (
          <Link href={`/portfolio/${item.id}`} 
          key={item.id}>
            <a className={`font-bold text-lg cursor-pointer ${
                hoveredItemIndex === index && "font-bold"
              }`}
              onMouseEnter={() => handleItemHover(index)}
              onMouseLeave={handleItemLeave}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
