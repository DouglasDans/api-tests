import { Router } from "express";
import getAllPublishersRoute from "./get-all-publishers.controller";
import createPublisherRoute from "./create-publisher.controller";
import deletePublisherRoute from "./delete-publisher.controller";
import updatePublisherRoute from "./update-publisher.controller";
import getByIdPublisherRoute from "./get-by-id-publisher.controller";

const publisherRoutes = Router();

publisherRoutes.get("/publisher", getAllPublishersRoute);
publisherRoutes.get("/publisher/:id", getByIdPublisherRoute);
publisherRoutes.post("/publisher", createPublisherRoute);
publisherRoutes.patch("/publisher", updatePublisherRoute);
publisherRoutes.delete("/publisher/:id", deletePublisherRoute);

export default publisherRoutes;
