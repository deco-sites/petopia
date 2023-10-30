
import { Event } from "deco/deps.ts";
import { useEffect } from "preact/compat";
import { useState } from "preact/hooks";

export interface Props {
    productID: string;
}


const ProductViews = ({productID}: Props) => {

    const [views, setViews] = useState(0)
    useEffect(() => {
        const userId = Math.random(); 
        const socket = new WebSocket(`ws://localhost:7000/product/${productID}?userId=${userId}`);
        socket.onmessage = (m) => {
            const data = JSON.parse(m.data);
            console.log("DATA: ", data);
            setViews(data.usernames.length);
        };
    
        socket.addEventListener('close', (event) => {
            console.log('Conexão fechada:', event);
        });
    
        socket.send(
            JSON.stringify({
                event: "views-update",
                message: userId,
            }),
        );
    }, [productID]);

    return (
        <div>
            {views} pessoas vizualizando este produto no momento.
        </div>
    )
}

export default ProductViews