<template>
  <div class="min-h-screen flex flex-col gap-8 items-center justify-center p-6 bg-gray-100">
    <button
        @click="getData"
        class="px-8 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-2xl shadow"
    >
      Get data
    </button>

    <div v-if="serverData && serverData.length" class="grid grid-cols-1 gap-6 mt-4">
      <div
          v-for="item in serverData"
          :key="item.id"
          class="bg-white shadow-md rounded-xl p-6 w-80"
      >
        <h3 class="text-lg font-bold text-gray-900 mb-2">{{ item.name }}</h3>
        <p class="text-gray-700"><strong>data:</strong> {{ item.date }}</p>
        <p class="text-gray-700"><strong>time:</strong> {{ item.time }}</p>
      </div>
    </div>

    <p v-else class="text-gray-500 mt-4">no data</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      serverData: []
    }
  },
  methods: {
    async getData() {
      try {
        const apiUrl = process.env.VUE_APP_API_URL

        const response = await fetch(`${apiUrl}/appointments`)

        if (!response.ok) {
          throw new Error(`Connection error: ${response.status}`)
        }

        const data = await response.json()

        console.log('От сервера пришло:', data)

        const needed = data.map(item => ({
          id: item.id,
          name: item.name,
          date: item.date,
          time: item.time
        }))

        this.serverData = needed

      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    }

  }
}
</script>

<style scoped>

</style>
