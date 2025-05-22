import React from 'react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';

const iconMap = {
    Github: <Github/>,
    Twitter:<Twitter/>
}

const Footer = ({footerContent}) => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-4 px-6 bottom-0 w-full ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <span className="text-sm font-semibold tracking-wide">
          © {footerContent.year} <span className="text-blue-400 font-bold">Assignment</span>. All rights reserved. 🚀
        </span>

        <div className="flex space-x-4 mt-2 md:mt-0">

            {footerContent.links.map((link,index) => (
                <a href={link.url} target='_blank' className="hover:text-blue-400 transition-colors" key={index}>
                    {iconMap[link.icon]}
                </a>
            ) )}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
