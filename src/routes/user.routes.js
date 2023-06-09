import { Router } from "express";
import {
  postRegistro,
  LoginPost,
  LoginGet,
  RecuperarGet,
  RecuperarPost,
  Verificar,
  getRegistro,
  viewProfileGet,
  updateUsuarioGet,
  updateUsuarioPost,
} from "../controllers/user.controller.js";

import { verifyToken } from "../controllers/validateToken.js";

const router = Router();

//crud usuario
router.get("/registro", getRegistro);
router.get("/login", LoginGet);
router.get("/recuperar", RecuperarGet);
router.get("/update", updateUsuarioGet);
router.get("/verificar", Verificar);
router.get("/profile", verifyToken, viewProfileGet);

router.post("/registro", postRegistro);
router.post("/login", LoginPost);
router.post("/recuperar", RecuperarPost);
router.put("/updateDatos", verifyToken, updateUsuarioPost);
router.post("/verificar", Verificar);

export default router;
