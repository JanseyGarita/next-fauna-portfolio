import { createMessage } from '@/lib/fauna'

export default async function handler(req, res) {
  const handlers = {
    POST: async () => {
      const {
        body: { name, message },
      } = req
      const created = await createMessage({
        name,
        message,
        createdAt: new Date(),
      })

      res.json(created)
    },
  }

  if (!handlers[req.method]) {
    return res.status(405).end()
  }

  await handlers[req.method]()
}
