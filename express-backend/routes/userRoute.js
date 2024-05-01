import express from 'express'
import {getUsers, getUser, updateUser, deleteUser} from '../controllers/userController.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = express.Router()

router.get("/", getUsers)

router.get("/:id",verifyToken, getUser)

router.put("/:id",verifyToken ,updateUser)

router.delete('/:id',verifyToken, deleteUser)

export default router;


