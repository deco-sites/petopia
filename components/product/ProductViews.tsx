
import { Event } from "deco/deps.ts";
import { useEffect } from "preact/compat";
import { useState } from "preact/hooks";

export interface Props {
    productID: string;
}


const ProductViews = ({productID}: Props) => {

    const [views, setViews] = useState(0)
    
    useEffect(() => {
        const randomId = Math.random();
        const socket = new WebSocket(`ws://localhost:7000/products?randomId=${randomId}&skuId=${productID}`);

        socket.onmessage = (m) => {
            const data = JSON.parse(m.data);
            if (data.skuId === productID) {
                setViews(data.length);
            }
        };
    
        socket.addEventListener('close', (event) => {
            console.log('Conexão fechada:', event);
        });
    
/*         socket.send(
            JSON.stringify({
                event: "views-update",
                message: randomId,
            }),
        ); */

    }, [productID]);

    return (
        <div>
            {views} pessoas vizualizando este produto no momento.
        </div>
    )
}

export default ProductViews