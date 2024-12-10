import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddchartIcon from "@mui/icons-material/Addchart";
import CopyAllIcon from "@mui/icons-material/CopyAll";
// import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
// import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
   
      {
        title: "Analytics",
        path: "/analytics/",
      },
      {
        title: "Project Management",
        path: "/project-management/",
      },
      {
        title: "LMS Courses",
        path: "/lms-courses/",
      },
    ],
  },
  {
    title: "Apps",
    path: "/apps/file-manager/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "File Manager",
        path: "/apps/file-manager/",
      },
      {
        title: "Chat",
        path: "/apps/chat/",
      },
      {
        title: "To Do",
        path: "/apps/to-do/",
      },
      {
        title: "Calendar",
        path: "/apps/calendar/",
      },
    ],
  },
  {
    title: "Email",
    path: "/email/inbox/",
    icon: <MailOutlineIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Inbox",
        path: "/email/inbox/",
      },
      {
        title: "Read Email",
        path: "/email/read-email/",
      },
    ],
  },
  {
    title: "Contact List",
    path: "/contact-list/",
    icon: <PostAddIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Contact List",
        path: "/contact-list/",
      },
      {
        title: "Members Grid",
        path: "/contact-list/contact-list2/",
      },
      {
        title: "Members List",
        path: "/contact-list/members-list/",
      },
      {
        title: "Profile",
        path: "/contact-list/profile/",
      },
    ],
  },
  {
    title: "Projects",
    path: "/projects/",
    icon: <CopyAllIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Projects",
        path: "/projects/",
      },
      {
        title: "Project Create",
        path: "/projects/project-create/",
      },
      {
        title: "Clients",
        path: "/projects/clients/",
      },
      {
        title: "Team",
        path: "/projects/team/",
      },
      {
        title: "Task",
        path: "/projects/task/",
      },
      {
        title: "User",
        path: "/projects/user/",
      },
      {
        title: "Kanban board",
        path: "/projects/kanban-board/",
      },
    ],
  },
  {
    title: "Analytics",
    path: "/analytics/customers/",
    icon: <AddchartIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Customers",
        path: "/analytics/customers/",
      },
      {
        title: "Reports",
        path: "/analytics/reports/",
      },
    ],
  },
 
  {
    title: "Settings",
    path: "/settings/account/",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Account",
        path: "/settings/account/",
      },
      {
        title: "Security",
        path: "/settings/security/",
      },
      {
        title: "Privacy Policy",
        path: "/settings/privacy-policy/",
      },
      {
        title: "Terms & Conditions",
        path: "/pages/terms-conditions/",
      },
      {
        title: "Logout",
        path: "/authentication/logout/",
      },
    ],
  },
];
