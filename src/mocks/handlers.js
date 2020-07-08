import { rest } from "msw";

export const handlers = [
  rest.get("/repos/:repo/:name", (req, res, ctx) => {
    const { repo, name } = req.params;
    console.log("handler", repo, name);
    return res(ctx.json({ name }));
  }),
];
