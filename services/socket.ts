// socket.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const connectedUsers = new Map();

const app = new Application();
const port = 7000;
const router = new Router();  
// send a message to all connected clients

function broadcast(message) {
    for (const client of connectedUsers.values()) {
        client.send(message);
    }
}

// send updated users list to all connected clients
function broadcast_users(skuId) {
    const users = [...connectedUsers.keys()].filter(id => connectedUsers.get(id).skuId === skuId);
    console.log(JSON.stringify(users));
    broadcast(
        JSON.stringify({
            event: "update-users",
            users: users,
            skuId: skuId,
            length: users.length
        }),
    );
}


router.get("/products", async (ctx) => {
    const socket = await ctx.upgrade();
    const randomId = ctx.request.url.searchParams.get("randomId");
    const skuId = ctx.request.url.searchParams.get("skuId");

    if (connectedUsers.has(randomId)) {
        socket.close(1008, `randomId ${randomId} is already taken`);
        return;
    }

    socket.randomId = randomId;
    socket.skuId = skuId;

    connectedUsers.set(randomId, socket);
    console.log(`New client connected: ${randomId}`);

    // broadcast the active users list when a new user logs in
    socket.onopen = () => {
        broadcast_users(skuId);
    };

    // when a client disconnects, remove them from the connected clients list
    // and broadcast the active users list
    socket.onclose = () => {
        console.log(`Client ${socket.randomId} disconnected`);
        connectedUsers.delete(socket.randomId);
        broadcast_users();
    };

    // broadcast new message if someone sent one
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
    await context.send({
        root: `${Deno.cwd()}/`,
        index: "./services/index.html",
    });
});
console.log("Listening at http://localhost:" + port);
await app.listen({ port });