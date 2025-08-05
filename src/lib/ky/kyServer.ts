import ky from "ky";
import { serverEnv } from "../env/serverEnv";

const kyServer = ky.create({
	prefixUrl: serverEnv.DATABASE_API_URL,
	credentials: "include",
	mode: "cors",
});
export default kyServer;
