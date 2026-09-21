import "dotenv/config";

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET is missing. Add it to server/.env");
}
export const JWT_SECRET: string = secret;