import express from "express"
import { deleteBooks, checkBooks, updateBooks, createBooks } from "./controller.js"

const router = express.Router()

router.route("/book/check").get(checkBooks)
router.route("/book/create").post(createBooks)
router.route("/book/delete/:id").delete(deleteBooks)
router.route("/book/update/:id").put(updateBooks)

export default router