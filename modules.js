import { admin, sayHi } from "./modules1.js";

console.log(admin.name)
admin.name = "vinay";
console.log(admin.name)
import {config} from './modules1.js';
config.user = "Pete";
sayHi()