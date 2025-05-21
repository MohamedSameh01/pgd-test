import fileManagementIcon from "../assets/icons/sidebar/file-management.png";
import userGroupIcon from "../assets/icons/sidebar/user-group.png";
import searchListIcon from "../assets/icons/sidebar/search-list-01.png";
import computerProtectionIcon from "../assets/icons/sidebar/computer-protection.png";
import chartLineDataIcon from "../assets/icons/sidebar/chart-line-data-02.png";
import settingsIcon from "../assets/icons/sidebar/settings-01.png";
// transactionsDAta
import chats from "../assets/icons/transactions/collections-bookmark.png"
import clock from "../assets/icons/transactions/clock-02.png";
import favouriteSquare from "../assets/icons/transactions/favourite-square.png";
import inboxDownload from "../assets/icons/transactions/inbox-download.png";
import loading from "../assets/icons/transactions/loading-01.png";
import share from "../assets/icons/transactions/share-02.png";
import simcard from "../assets/icons/transactions/simcard-dual.png";
import taskDone from "../assets/icons/transactions/task-done-01.png";


// table data
import orderIcon from "../assets/icons/table/icon 25.png"


export const sidebarItems = [
  
  { icon: fileManagementIcon, text: "إدارة الملفات" },
  { icon: userGroupIcon, text: "إدارة المستخدمين" },
  { icon: searchListIcon, text: "البحث عن المعاملات" },
  { icon: computerProtectionIcon, text: "خصائص أمنية" },
  { icon: chartLineDataIcon, text: "تقارير" },
  { icon: settingsIcon, text: "إعدادات" },
];


export const secretData = [
  { icon: share, number: 12, label: "المخاطبات", color: "bg-[#ECF5FE]" },
  {
    icon: chats,
    number: 5,
    label: "نسخ الوارد الداخلي",
    color: "bg-[#ECF5FE]",
  },
  {
    icon: clock,
    number: 40,
    label: "الوارد الداخلي",
    color: "bg-[#D5E2DF]",
  },
  {
    icon: favouriteSquare,
    number: 10,
    label: "معاملات قيد التحضير",
    color: "bg-[#D4D8DB]",
  },
  { icon: inboxDownload, number: 0, label: "التعاميم", color: "bg-[#D8D3D9]" },
  {
    icon: loading,
    number: 8,
    label: "المحفوظات",
    color: "bg-[#E7DBCE]",
  },
  {
    icon: simcard,
    number: 23,
    label: "المعاملات المميزة",
    color: "bg-[#C6CFD5]",
  },
  { icon: taskDone, number: 9, label: "المحفوظات", color: "bg-[#D6DBDB]" },
];
export const ordenaryData = [
  { icon: share, number: 12, label: "المخاطبات", color: "bg-[#ECF5FE]" },
  {
    icon: chats,
    number: 13,
    label: "نسخ الوارد الداخلي",
    color: "bg-[#ECF5FE]",
  },
  {
    icon: clock,
    number: 22,
    label: "الوارد الداخلي",
    color: "bg-[#D5E2DF]",
  },
  {
    icon: favouriteSquare,
    number: 18,
    label: "معاملات قيد التحضير",
    color: "bg-[#D4D8DB]",
  },
  { icon: inboxDownload, number: 0, label: "التعاميم", color: "bg-[#D8D3D9]" },
  {
    icon: loading,
    number: 71,
    label: "المحفوظات",
    color: "bg-[#E7DBCE]",
  },
  {
    icon: simcard,
    number: 25,
    label: "المعاملات المميزة",
    color: "bg-[#C6CFD5]",
  },
  { icon: taskDone, number: 19, label: "المحفوظات", color: "bg-[#D6DBDB]" },
];



export const tableData = {
  names: [
    {
      name: "رقم",
      icon: orderIcon,
    },
    {
      name: "موضوع المعامله",
      icon: orderIcon,
    },
    {
      name: "الجهه الوارد منها ",
      icon: orderIcon,
    },
    {
      name: "داخلي / خارجي",
      icon: orderIcon,
    },
    {
      name: "تاريخ الوارد",
      icon: orderIcon,
    },
    {
      name: "عدد المرفقات",
      icon: orderIcon,
    },
    {
      name: "اهمية المعامله",
      icon: orderIcon,
    },
    {
      name: "اختر",
    },
    {
      name: "",
    },
    {
      name: "",
    },
  ],
  data:[
    {
      number:123,
      
    }
  ]
};