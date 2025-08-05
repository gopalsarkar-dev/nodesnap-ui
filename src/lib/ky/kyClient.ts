import ky from "ky";
import { clientEnv } from "../env/clientEnv";

const kyClient = ky.create({
	prefixUrl: clientEnv.NEXT_PUBLIC_DATABASE_API_URL,
	credentials: "include",
	mode: "cors",
});

export default kyClient;
