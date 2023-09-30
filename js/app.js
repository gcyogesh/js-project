import header from "./components/header.js";
import home from "./components/home.js";
import contact from "./components/contact/contact.js";
import about from "./components/about/about.js";
import project from "./components/project/project.js";

function app(page) {
    let outPut = "<div>";
    outPut += header();

    if (page == 'home') {
        outPut += home();
    } else if (page == 'contact') {
        outPut += contact();
    } else if(page =='about'){
        outPut += about();
    }else if(page == 'project'){
        outPut += project();
    }

    outPut += `</div>`

    return outPut;
}

export default app;