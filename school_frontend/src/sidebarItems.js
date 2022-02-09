import AcademicYears from "app/components/body/AcademicYears";
import Classes from "app/components/body/Classes";
import Dashboard from "app/components/body/Dashboard"
import Home from "app/components/body/Home"
import Students from "app/components/body/Students";
import Teachers from "app/components/body/Teachers";

var items = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-shop text-primary",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/academic-years",
    name: "Academic Years",
    icon: "ni ni-folder-17 text-primary",
    component: AcademicYears,
    layout: "/admin",
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "ni ni-books text-primary",
    component: Classes,
    layout: "/admin",
  },
  {
    path: "/teachers",
    name: "Teachers",
    icon: "ni ni-book-bookmark text-primary",
    component: Teachers,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",
    icon: "ni ni-hat-3 text-primary",
    component: Students,
    layout: "/admin",
  },
  ];
export default items;
