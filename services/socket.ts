// server.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const connectedUsers = new Map();

const app = new Application();
const port = 7000;
const router = new Router();

// send a message to all connected clients
function broadcast(/* skuId,  */message) {

/*     let obj = JSON.parse(message)
    obj["usernames"].forEach((item: string)=>{
        if (item == skuId) {
        }
    }) */
    for (const client of connectedUsers.values()) {
        client.send(message);
    }
    
}

// send updated users list to all connected clients
function broadcast_users(skuId: string) {
    const usernames = [...connectedUsers.keys()];
    console.log(
        "Sending updated username list to all clients: " +
        JSON.stringify(usernames),
    );
    broadcast(
        skuId,
        JSON.stringify({
            event: "update-users",
            usernames: usernames,
        }),
    );
}


router.get("/product/:skuId", async (ctx) => {
    const socket = await ctx.upgrade();
    const skuId = ctx.params.skuId;
    const userId = ctx.request.url.searchParams.get("userId");

    connectedUsers.set(userId, socket);

    // broadcast the active users list when a new user logs in
    socket.onopen = () => {
        broadcast_users(userId);
    };

    // when a client disconnects, remove them from the connected clients list
    // and broadcast the active users list
    socket.onclose = () => {
        console.log(`Client ${userId} disconnected`);
        connectedUsers.delete(userId);
        broadcast_users(userId);
    };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
    await context.send({
        root: `${Deno.cwd()}/`,
        index: "./services/index.html",
    });
});

await app.listen({ port });