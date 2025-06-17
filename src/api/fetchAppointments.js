export async function fetchAppointments() {
  try {
    const apiUrl = process.env.VUE_APP_API_URL

    const response = await fetch(`${apiUrl}/appointments`)

    if (!response.ok) {
      throw new Error(`connection error: ${response.status}`)
    }

    const data = await response.json()

    return data.map(item => ({
      id: item.id,
      name: item.name,
      date: item.date.replaceAll('-', '.'),
      time: item.time
    }))

  } catch (error) {
    console.error('error', error)
    return []
  }
}
