import { Router } from "express";
import ProductsController from "./productsController";
const router = Router();

router.post("/", ProductsController.createProduct);
router.get("/", ProductsController.getProducts);
router.put("/:id", ProductsController.updateProduct);
router.delete("/:id", ProductsController.deleteProduct);



const productsRouter = router;
export default productsRouter;