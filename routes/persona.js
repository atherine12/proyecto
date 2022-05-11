import { Router } from "express";
import { personaDelete, personaGet, personaGetBuscar, personaGetLogin, personaPost } from "../controllers/persona.js";
const router = Router();

router.post("/", personaPost );

router.get("/", personaGet   );

router.get("/buscar", personaGetBuscar    );

router.get("/login", personaGetLogin);

router.delete("/", personaDelete);

export default router;