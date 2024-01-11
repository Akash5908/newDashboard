import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md"

export const menuItems = {
  title: "ERP",
  list: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Invoice",
      path: "/dashboard/invoice",
      icon: <MdAttachMoney />,
    },
    {
      title: "Department",
      path: "/department",
      icon: <MdWork />,
      subCategory: [
        {
          title: "New Department",
          path: "/dashboard/department/new",
        },
        {
          title: "Department List",
          path: "/dashboard/department/list",
        },
      ],
    },
    {
      title: "Leave Type",
      path: "/dashboard/leave-type",
      icon: <MdAnalytics />,
      subCategory: [
        {
          title: "New Leave",
          path: "/dashboard/leave/new",
        },
        {
          title: "Leave Type List",
          path: "/dashboard/leave/list",
        },
      ],
    },
    {
      title: "Employee",
      path: "/dashboard/employee",
    },
    {
      title: "Tasks",
      path: "/dashboard/employees/tasks",
      icon: <MdWork />,
    },
    {
      title: "Transactions",
      path: "/dashboard/employees/transactions",
      icon: <MdAttachMoney />,
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Opportunities",
      path: "/projects/opportunities",
      icon: <MdPeople />,
    },
    {
      title: "Clients",
      path: "/projects/clients",
      icon: <MdPeople />,
    },
    {
      title: "Deals",
      path: "/projects/deals",
      icon: <MdAttachMoney />,
    },
    {
      title: "Goals",
      path: "/projects/goals",
      icon: <MdWork />,
    },
    {
      title: "Promotion",
      path: "/projects/promotion",
      icon: <MdPeople />,
    },
    {
      title: "Projects",
      path: "/projects/projects",
    },
    {
      title: "Holiday",
      path: "/hr/holiday",
      icon: <MdWork />,
    },
    {
      title: "Complaints",
      path: "/hr/complaints",
      icon: <MdHelpCenter />,
    },
    {
      title: "Contracts",
      path: "/hr/contracts",
      icon: <MdAttachMoney />,
    },
    {
      title: "Target List",
      path: "/hr/target-list",
      icon: <MdPeople />,
    },
    {
      title: "Shift",
      path: "dashboard/shift",
      subCategory: [
        {
          title: "Shifts",
          path: "/shifts",
        },
        {
          title: "Assign Shift",
          path: "/shifts/assign-shifts",
        },
      ],
    },

    {
      title: "Leave",
      path: "/leave",
      icon: <MdWork />,
      subCategory: [
        {
          title: "Leave List Pending",
        },
        {
          title: "Leave List Pending",
        },
        {
          title: "Leave List Pending",
        },
      ],
    },
    {
      title: "Stock",
      path: "/stock/stock",
      icon: <MdShoppingBag />,
      subCategory: [
        {
          title: "Leave List Pending",
        },
        {
          title: "Leave List Pending",
        },
        {
          title: "Leave List Pending",
        },
      ],
    },
    {
      title: "Payroll",
      path: "/payroll/payroll",
      icon: <MdAttachMoney />,
    },
    {
      title: "Profile",
      path: "/profile/profile",
      icon: <MdSupervisedUserCircle />,
      subCategory: [
        {
          title: "Leave List Pending",
        },
        {
          title: "Leave List Pending",
        },
        {
          title: "Leave List Pending",
        },
      ],
    },
    // Add other Payroll options as needed
    {
      title: "Logout",
      path: "/logout",
      icon: <MdOutlineSettings />,
    },
  ],
}
