import fastify from "fastify";

// import { createNote } from "../routes/postNotes";
// import { getNotes } from "../routes/getNotes";

const app = fastify();

// // app.register(cookie, {
// //   secret: "polls-app-nlw-secret-string",
// //   hook: "onRequest",
// //   parseOptions: {}
// // })

// app.register(createNote)
// app.register(getNotes)
// // app.register(voteOnPollRoute)
// // app.register(fastifyWebsocket)
// // app.register(pollResults)

app.get("/hello", () => {
  return "Hello World";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Running");
});
