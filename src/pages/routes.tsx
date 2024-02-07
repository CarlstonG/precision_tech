import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import VirtualMedicalStaff from './VirtualMedicalStaff';
import Rcm from './Rcm';
import Marketing from './Marketing';
import Testimonials from './Testimonials';
import Blog from './Blog';
import OnePost from '../components/OnePost'
import ContactUs from './ContactUs';


const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/about-us', component: AboutUs },
    { path: '/Virtual-medical-staff', component: VirtualMedicalStaff },
    { path: '/rcm', component: Rcm },
    { path: "/aboutus", component: AboutUs },
    { path: "/marketing", component: Marketing },
    { path: "/testimonials", component: Testimonials },
    { path: "/contactus", component: ContactUs },
    { path: "/blog", component: Blog, exact: true },
    { path: "/blog/:slug", component: OnePost },
];
export type RouteType = {
    path: string;
    component: React.FC;
};

export default routes