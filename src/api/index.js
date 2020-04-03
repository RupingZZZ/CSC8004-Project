import ajax from "./ajax";
const BASE='';


export const reLogin = (username,password)=>ajax(BASE+'/login',{username,password},'POST')

