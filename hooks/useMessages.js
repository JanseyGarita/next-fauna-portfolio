import { mutate } from 'swr'

const useMessages = () => {
  const ENTRIES_PATH = '/api/entries'

  const saveMessage = (payload) =>
    fetch(ENTRIES_PATH, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)))

  const onSubmit = async (payload) => {
    await saveMessage(payload)
    await mutate(ENTRIES_PATH)
  }

  return {
    onSubmit,
  }
}

export default useMessages
