import { MenuItem } from "../interfaces/appInterfaces";
export const menuItems:MenuItem[] = [{
    id:"1",
    name: "Animation 01",
    icon: 'cube-outline',
    component: 'Animation01Screen'
},
{
    id:"2",
    name: "Animation 02",
    icon: 'albums-outline',
    component: 'Animation02Screen'
},
{
    id:"3",
    name:"Switches",
    icon:'toggle-outline',
    component:'SwitchScreen'
},
{
    id:"4",
    name:"Alerts",
    icon:'alert-circle-outline',
    component:'AlertScreen'
}
];