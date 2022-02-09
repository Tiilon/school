/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Logout from "app/components/Logout";
import Login from "app/components/Login"
import Dashboard from "app/components/body/Dashboard"
import Home from "app/components/body/Home"
import AcademicYears from "app/components/body/AcademicYears";
import Classes from "app/components/body/Classes";
import Teachers from "app/components/body/Teachers";
import Students from "app/components/body/Students";
import AcademicYear from "app/components/body/AcademicYear";
import Term from "app/components/body/Term";

var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
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
    path: "/academic-year",
    name: "Academic Year",
    icon: "ni ni-folder-17 text-primary",
    component: AcademicYear,
    layout: "/admin",
  },
  {
    path: "/term",
    name: "Term",
    icon: "ni ni-folder-17 text-primary",
    component: Term,
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
  // {
  //   path: "/logout",
  //   name: "Logout",
  //   icon: "ni ni-key-25 text-info",
  //   component: Logout,
  //   layout: "/auth",
  // },
 
];
export default routes;
