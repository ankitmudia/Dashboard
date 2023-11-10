import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  DashboardIcon,
  AccountBalanceWalletIcon,
  AttachMoneyIcon,
  PersonIcon,
  ContactsIcon
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboard",
    path: "dashboards",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    name: "accounts",
    path: "accounts",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    id: 3,
    name: "payroll",
    path: "payroll",
    icon: <AttachMoneyIcon />,
  },
  {
    id: 4,
    name: "reports",
    path: "reports",
    icon: <InvoiceIcon />,
  },
  {
    id: 5,
    name: "advisor",
    path: "advisor",
    icon: <PersonIcon />,
  },
  {
    id: 6,
    name: "contacts",
    path: "contacts",
    icon: <ContactsIcon />,
  }
];
