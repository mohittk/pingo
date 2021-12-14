import React from 'react';
import Branding from '../components/branding/branding';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const JoinPage = (socket, room) =>{

    const room_id = () =>{
        
    }



    return(
        <>
        <Branding />
        <div className="join_page_main">
            <div className="room_id">
                <p> Room Id </p>



            </div>

        </div>
        </>
    )


    


}



export default JoinPage;