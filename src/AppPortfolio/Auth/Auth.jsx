import { useEffect, useState } from "react"
import HomePage from "../HomePage";
import Cookie from 'js-cookie'
import Login from "../../Login";

export default function Auth() {
    let [isCheck, check] = useState();
    const canCheckAuth = () =>{
        let check1 = Cookie.get("isLogin")
        check(check1)
    }
    useEffect(()=>{
        canCheckAuth();
        console.log('isCheck : '+ isCheck);

    },[])
    return (
        <>
        
        </>
    )
}