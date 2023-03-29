import { PrismaClient } from "@prisma/client"

const client = globalThis.prisma || new PrismaClient()
if (process.env.Node_ENV !== "production") globalThis.prisma = client



export default client

