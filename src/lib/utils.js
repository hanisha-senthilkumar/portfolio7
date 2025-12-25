import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";


export const cn=(...inputs)=>{
    return twMerge(clsx(inputs));
}

export function smoothScrollToId(id, offset = 70) {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}