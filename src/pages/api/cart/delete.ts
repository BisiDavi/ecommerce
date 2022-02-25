import swell from "swell-node";
import type { NextApiRequest, NextApiResponse } from "next";
import swellNodeInit from "../../../lib/swellNode";

export default async function fetchProductsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  swellNodeInit();

  switch (req.method) {
    case "POST": {
      return await swell
        .delete("/carts/{id}", {
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
