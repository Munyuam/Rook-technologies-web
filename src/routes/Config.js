import Services from "../Services";
import About from "../About"; 
import Index from "../Home";
import Contact from "../Contact";
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
    }, 
     {
        path : '/contact',
        component : <Contact/>
    },
    {
        path : '*',
        component : <NotFound/>
    }

]

export default routes;