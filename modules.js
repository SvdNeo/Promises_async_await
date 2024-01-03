import { admin, sayBye, sayHi,config, obj as obj1} from "./modules1.js";

console.log(admin.name)
admin.name = "vinay";
console.log(admin.name)

config.user = "Devanya";
sayHi()
sayBye()
console.log(obj1.team)