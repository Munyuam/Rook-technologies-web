import Services from "../Services";
import About from "../About"; 
import Index from "../Home";
import Contact from "../Contact";
import Blogs from "../Blogs";
import WhyBandwidthWorksForMalawi from "../Blogs/why-bandwith-works-for-malawi";
import Downloads from "../Downloads";
import SoftwareDetail from "../SoftwareDetail";
import NotFound from "../errors/NotFound";

const routes = [
    {
        path : '/',
        component : <Index/>
    },
    {
        path : '/about',
        component : <About/>
    },
     {
        path : '/Services',
        component : <Services/>
    },{
        path : '/blogs',
        component : <Blogs/>
    } ,
    {
        path : '/blogs/why-bandwidth-reselling-works-for-malawi',
        component : <WhyBandwidthWorksForMalawi/>
    } ,
     {
        path : '/contact',
        component : <Contact/>
    },
    {
        path : '/downloads',
        component : <Downloads/>
    },
    {
        path : '/software/:id',
        component : <SoftwareDetail/>
    },
    {
        path : '*',
        component : <NotFound/>
    }

]

export default routes;