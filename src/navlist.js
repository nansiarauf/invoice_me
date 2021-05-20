import {
  FiHome,
  FiLogOut,
  ImCogs,
  ImUsers,
  ImUserTie,
  FaFileInvoiceDollar,
  FaFileInvoice,
} from "react-icons/all";
const navlist = [
  { id: 1, link: "/", icon: <FiHome size={30} />, title: "Dashboard" },
  {
    id: 2,
    link: "/invoices",
    icon: <FaFileInvoiceDollar size={30} />,
    title: "All Invoices",
  },
  {
    id: 5,
    link: "/create",
    icon: <FaFileInvoice size={30} />,
    title: "Create Invoice",
  },
  {
    id: 4,
    link: "/all",
    icon: <ImUserTie size={30} />,
    title: "All Clients",
  },
  {
    id: 3,
    link: "/addclient",
    icon: <ImUserTie size={30} />,
    title: "Add Client",
  },

  {
    id: 6,
    link: "/account",
    icon: <ImUsers size={30} />,
    title: "User Account",
  },
  { id: 7, link: "/settings", icon: <ImCogs size={30} />, title: "Settings" },
  { id: 8, link: "/logout", icon: <FiLogOut size={30} />, title: "Log Out" },
];

export default navlist;
