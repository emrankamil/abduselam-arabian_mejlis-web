import { MdDesignServices } from "react-icons/md";
import { GiPapers } from "react-icons/gi";
import { MdOutlineDraw } from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";

export const services = [
  {
    title: "Arabian Mejlis",
    description: "Arabian Mejlis Design",
    imageUrl: "/about_us/arabian-mejlis-01.jpg",
    category: "Architecture",
    icon: <MdDesignServices className="w-8 h-8 text-primary" />,
  },
  {
    title: "Sofas",
    description: "Furniture Design",
    imageUrl: "/about_us/couche-01.jpg",
    category: "Interior Design",
    icon: <GiPapers className="w-8 h-8 text-primary" />,
  },
  {
    title: "Beds",
    description: "Furniture",
    imageUrl: "/about_us/bed-01.jpg",
    category: "Furniture",
    icon: <MdOutlineDraw className="w-8 h-8 text-primary" />,
  },
  {
    title: "Tv Stands",
    description: "Furniture Design",
    imageUrl: "/about_us/tv-stand-03.jpg",
    category: "Architecture",
    icon: <ImMakeGroup className="w-8 h-8 text-primary" />,
  },
];

export const stats = [
  {
    icon: "/about_us/business.png",
    label: "Years Of Experience",
    label_am: "Years Of Experience",
    value: "10+",
  },
  {
    icon: "/about_us/success.png",
    label: "Success Projects",
    label_am: "Success Projects",
    value: "600+",
  },
  {
    icon: "/about_us/leader.png",
    label: "Team Members",
    label_am: "Team Members",
    value: "40+",
  },
  {
    icon: "/about_us/client-satisfaction.png",
    label: "Client Satisfactions",
    label_am: "Client Satisfactions",
    value: "500+",
  },
];
