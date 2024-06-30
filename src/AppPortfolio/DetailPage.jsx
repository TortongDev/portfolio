import React from 'react';
import { useParams } from "react-router-dom";
function DetailPage (){
    let { idUser } = useParams();
    return (
        
        <>
        Get ID : {idUser}
        </>
    )
}
export default DetailPage