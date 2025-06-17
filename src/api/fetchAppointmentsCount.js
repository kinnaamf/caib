export async function fetchAppointmentsCount() {
  try {
    const apiUrl = process.env.VUE_APP_API_URL

    const response = await fetch(`${apiUrl}/appointments/count`)

    if (!response.ok) {
      throw new Error(`connection error: ${response.status}`)
    }

    const data = await response.json()

    return data

  } catch (error) {
    console.error('error', error)
    return []
  }
}
