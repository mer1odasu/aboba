import express from "express"
import { checkCat, createCat, deleteCat, updateCat } from "./controller.js"

const router = express.Router()

 router.route("/category/check").get(checkCat)
 router.route("/category/create").post(createCat)
 router.route("/category/delete/:id").delete(deleteCat)
 router.route("/category/update/:id").put(updateCat)

export default router