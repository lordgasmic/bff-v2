import express from "express";
import fetch from "node-fetch";
import { services } from "../constsants.js";

const wineImagesRouter = express.Router();

wineImagesRouter.get("/", async function (req, res, next) {
  const response = await fetch(
    `${services["collection-service"]}/api/v1/wineImages?wineId=${req.query.wineId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return res.send(response);
});

// wineImagesRouter.put("/", async function (req, res, next) {
//   /*
//          @RequestParam("wineId") final int wineId,
//          @RequestParam("label") final String label,
//          @RequestParam("imageFile") final MultipartFile imageFile,
//          @RequestHeader final Map<String, String> headers
//        */
//
//   const response = await fetch(
//     `${services["collection-service"]}/api/v1/wineImages`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         wineryId: req.body.wineryId,
//         name: req.body.name,
//         style: req.body.style,
//       }),
//     },
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       return json;
//     });
//   return res.send(response);
// });

export default wineImagesRouter;
