import pubSub from "./components/pubSub/pubSub.js";
import dataController from "./components/dataController/dataController.js";
import sideMenu from "./views/sideMenu.js";

const service = pubSub();
const data = dataController(service);
const side = sideMenu(service);
data.createProject({ title: "NewTitle", description: "NewDescription" });
data.createProject({ title: "NewTitle2", description: "NewDescription2" });
data.createProject({ title: "NewTitle3", description: "NewDescription3" });
data.createProject({ title: "NewTitle4", description: "NewDescription4" });
