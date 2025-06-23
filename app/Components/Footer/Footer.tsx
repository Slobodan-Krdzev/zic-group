import React from "react";
import LogoWrapper from "../Navbars/LogoWrapper";
import Link from "next/link";
import Image from "next/image";

export const footerLists: {
    title: string,
    links: {
        text:string,
        link?: string
    }[]
}[] =
 [{
    title: 'Services',
    links: [{
        text: 'Web Dev',
    },{
        text: 'Software',
    },{
        text: 'Video',
    },{
        text: 'Photo',
    },
    
]
},{
    title: 'Resources',
    links: [{
        text: 'Our Work',
        link: '/projects'
    }
]
},{
    title: 'Legal',
    links: [{
        text: '+389 78 728 336',
    },{
        text: 'info@zicgroupbpo.com',
    },{
        text: 'Belgradska 16',
    },
    {
        text: 'Gevgelija, N.Macedonia',
    }
]
}];

export const socialIcons:{
    icon: string,
    link: string
}[] = [{
    icon: "/linkedin.png",
    link: 'https://www.linkedin.com/company/zic-group-bpo/'
},{
    icon: "/facebook.png",
    link: 'https://www.facebook.com/zicgroupbpo'
},{
    icon: "/instagram.png",
    link: 'https://www.instagram.com/zicgroupbpo'
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
                    {list.links.map(link => (link.link ? <li key={link.link} className="mb-4"><Link href={link.link} className="hover:text-textMain transition-all ease-in-out hover:scale-105">{link.text}</Link></li> : <p key={link.text} className="hover:text-textMain transition-all ease-in-out hover:scale-105">{link.text}</p>) )}
                </ul>
            </div>)}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-6 pt-6">
            <p className="w-full md:w-1/2">© 2025 ZICGROUPBPO All rights reserved</p>
            <div className="w-full md:w-1/2 flex justify-start md:justify-end items-center gap-12">
                {socialIcons.map(icon => <Link href={icon.link} key={icon.link} target="_blank"><Image src={icon.icon} alt={icon.link} width={30} height={30}/></Link>)}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
