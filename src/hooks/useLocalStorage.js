import {useEffect,useState} from 'react';
export function useLocalStorage(key,initial){const [value,setValue]=useState(()=>{try{const x=localStorage.getItem(key);return x!==null?JSON.parse(x):initial}catch{return initial}});useEffect(()=>localStorage.setItem(key,JSON.stringify(value)),[key,value]);return[value,setValue]}
