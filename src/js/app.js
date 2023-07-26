
import StartPage  from "./StartPage";
import Listner from "./listner"

const page = new StartPage(document.querySelector("body"))
page.drawUI()


const listner = new Listner(document.querySelector(".container"));
listner.bind();