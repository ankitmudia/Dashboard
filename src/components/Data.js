import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboard",
    path: "dashboards",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "accounts",
    path: "accounts",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "payroll",
    path: "payroll",
    icon: <CalendarIcon />,
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
    icon: <InvoiceIcon />,
  },
  {
    id: 6,
    name: "contacts",
    path: "contacts",
    icon: <InvoiceIcon />,
  }
];
