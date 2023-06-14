import { Activity } from "../types";

export async function GETRandomActivity(url: string) {
    localStorage.removeItem("activity")
    const cachedData = localStorage.getItem("activity");
    if(cachedData){
        return JSON.parse(cachedData) as Activity;
    }
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem("activity", JSON.stringify(data));
    setTimeout(() => {
        localStorage.removeItem("activity");
    }, 1000);
    return data;
}