import { MdDesignServices } from "react-icons/md";
import { GiPapers } from "react-icons/gi";
import { MdOutlineDraw } from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";

export const services = [
  {
    title: "Arabian Mejlis",
    description: "Arabian Mejlis Design",
    imageUrl: "/about_us/mejlis.jpg",
    category: "Architecture",
    icon: <MdDesignServices className="w-8 h-8 text-primary" />,
  },
  {
    title: "Sofas",
    description: "Furniture Design",
    imageUrl: "/about_us/sofa.jpg",
    category: "Interior Design",
    icon: <GiPapers className="w-8 h-8 text-primary" />,
  },
  {
    title: "Beds",
    description: "Furniture",
    imageUrl: "/about_us/bed.jpg",
    category: "Furniture",
    icon: <MdOutlineDraw className="w-8 h-8 text-primary" />,
  },
  {
    title: "Tv Stands",
    description: "Furniture Design",
    imageUrl: "/about_us/tv-stand.jpg",
    category: "Architecture",
    icon: <ImMakeGroup className="w-8 h-8 text-primary" />,
  },
];

export const stats = [
  {
    icon: "/about_us/business.png", // You can replace this with an actual icon component or an image
    label: "Years Of Experience",
    value: "10+",
  },
  {
    icon: "/about_us/success.png", // You can replace this with an actual icon component or an image
    label: "Success Projects",
    value: "600+",
  },
  {
    icon: "/about_us/leader.png", // You can replace this with an actual icon component or an image
    label: "Team Members",
    value: "40+",
  },
  {
    icon: "/about_us/client-satisfaction.png", // You can replace this with an actual icon component or an image
    label: "Client Satisfactions",
    value: "500+",
  },
];

export const steps = [
  {
    title: "Project Planning",
    icon: "📋", // You can replace this with an actual icon
    items: [
      "Project Kick off",
      "Central of Control to predict all facets of the project and ensure a smooth journey.",
      "Category Analysis",
      "Project & Lead time Analysis",
    ],
  },
  {
    title: "Product Development",
    icon: "🔧", // You can replace this with an actual icon
    items: [
      "Shop Drawings",
      "Material Submittals",
      "Samples Submission",
      "Pre-production of Prototype for MUR",
    ],
  },
  {
    title: "Production & Quality Control",
    icon: "🔍", // You can replace this with an actual icon
    items: [
      "Progress Report",
      "Mock-up Prototyping",
      "Mass Production",
      "Prototype Inspection",
      "Quality Assurance & Quality Control Inspection",
    ],
  },
  {
    title: "Packaging & Delivery",
    icon: "📦", // You can replace this with an actual icon
    items: [
      "Custom Shipping Boxes",
      "Shockproof Labels",
      "Unboxing Instructions",
      "Logistic (Sea & Air)",
      "Custom Duties & Clearance",
      "Local Transportation",
    ],
  },
  {
    title: "Handover & Maintenance",
    icon: "🔧", // You can replace this with an actual icon
    items: [
      "Sign Off",
      "Maintenance & Cleaning Manual",
      "Warranties",
      "Certificates",
      "FR Certificate",
      "Furniture Shop Drawings",
    ],
  },
];
