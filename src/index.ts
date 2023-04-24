import { server } from "./server/server";


server.listen(process.env.PORT, () => {
    console.log("Server road on port", process.env.PORT);
})
