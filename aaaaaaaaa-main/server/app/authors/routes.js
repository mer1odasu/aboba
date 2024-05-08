import express from 'express'

import {checkAuthor, createAuthor, deleteAuthor, updateAuthor} from './controller.js'

const router = express.Router()

router.route('/author/check').get(checkAuthor)
router.route('/author/create').post(createAuthor)
router.route('/author/delete/:id').delete(deleteAuthor)
router.route('/author/update/:id').put(updateAuthor)

export default router