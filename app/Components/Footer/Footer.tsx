import React from "react";
import LogoWrapper from "../Navbars/LogoWrapper";
import Link from "next/link";
import Image from "next/image";

export const footerLists: {
    title: string,
    links: {
        text:string,
        link: string
    }[]
}[] =
 [{
    title: 'Services',
    links: [{
        text: 'Blog',
        link: '/blogs'
    },{
        text: 'Careers',
        link: '/careers'
    },{
        text: 'Pricing',
        link: '/pricing'
    }
]
},{
    title: 'Resources',
    links: [{
        text: 'Documentation',
        link: '/documentation'
    },{
        text: 'Papers',
        link: '/papers'
    },{
        text: 'Press Conferences',
        link: '/press'
    }
]
},{
    title: 'Legal',
    links: [{
        text: 'Terms of Service',
        link: '/tearms'
    },{
        text: 'Privacy Policy',
        link: '/policy'
    },{
        text: 'Cookies',
        link: '/cookies'
    },
    {
        text: 'Data Processing',
        link: '/data'
    }
]
}];

export const socialIcons:{
    icon: string,
    link: string
}[] = [{
    icon: "/linkedin.png",
    link: '/1'
},{
    icon: "/facebook.png",
    link: '/2'
},{
    icon: "/youtube.png",
    link: '/3'
}]

const Footer = () => {
  return (
    <footer className="bg-footerBlue pt-16 pb-4">
      <div className="w-11/12 lg:w-9/12 m-auto">
        <div className="flex flex-col lg:flex-row justify-content border-b-2 pb-4 gap-8">
          <div className="w-full lg:w-1/2">
            <LogoWrapper />
            <p className="mt-6 text-xl">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-start lg:justify-end gap-8 ">
            {footerLists.map(list => <div key={list.title}>
                <h4 className="mb-6 font-semibold text-xl">{list.title}</h4>
                <ul>
                    {list.links.map(link => <li key={link.link} className="mb-4"><Link href={link.link} className="hover:text-textMain transition-all ease-in-out hover:scale-105">{link.text}</Link></li>)}
                </ul>
            </div>)}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-6 pt-6">
            <p className="w-full md:w-1/2">© 2025 ZICGROUPBPO All rights reserved</p>
            <div className="w-full md:w-1/2 flex justify-start md:justify-end items-center gap-12">
                {socialIcons.map(icon => <Link href={icon.link} key={icon.link}><Image src={icon.icon} alt={icon.link} width={30} height={30}/></Link>)}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
