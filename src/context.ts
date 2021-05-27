import { PrismaClient } from '@prisma/client'

export interface Context {
  prisma: PrismaClient
}

// Middleware function to track db query performance
// prisma.$use(async (params, next) => {
//   const transaction = Sentry.startTransaction({
//     op: `${params.model}.${params.action}`,
//     name: 'Prisma DB query',
//   })
//   const result = await next(params)
//   transaction.finish()

//   return result
// })
