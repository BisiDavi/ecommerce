import swell from "swell-node";
import type { NextApiRequest, NextApiResponse } from "next";
import swellNodeInit from "../../../lib/swellNode";

export default async function fetchProductsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  swellNodeInit();

  const cart = req.body;

  console.log("received cart", cart);

  switch (req.method) {
    case "POST": {
      return await swell
        .post("/carts", cart)
        .then((response: any) => {
          console.log("response cart", response);
          return res.status(200).send(response);
        })
        .catch((error: any) => {
          console.log("error", error);
          return res.status(400).send(error);
        });
    }
    case "GET": {
      return await swell
        .get("/carts/{id}", {
          id: req.body.id,
        })
        .then((response: any) => {
          console.log("retrieved cart", response);
          return res.status(200).send(response?.results);
        })
        .catch((err: any) => {
          console.error("error", err);
          return res.status(400).send(err.results);
        });
    }
  }
}
