import { createConnections, getConnection } from "typeorm"

beforeAll(async () => {
  await createConnections()
})

afterAll(async () => {
  const defaultConnection = getConnection('default')
  await defaultConnection.close()
})
