<template>
  <div>
    <form @submit.prevent="submitData">
      <div>
        <label for="title">title:</label>
        <input type="text" id="title" v-model="formData.Title">
      </div>
      <div>
        <label for="description">description:</label>
        <textarea id="description" v-model="formData.Description"></textarea>
      </div>
      <div>
        <label for="imageUrl">image url:</label>
        <input type="text" id="imageUrl" v-model="formData.ImageURL">
      </div>
      <div>
        <label for="content">content:</label>
        <textarea id="content" v-model="formData.Content"></textarea>
      </div>
      <div>
        <label for="adminId">admin id:</label>
        <input type="number" id="adminId" v-model.number="formData.AdminID">
      </div>
      <button type="submit">send data</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'DataSenderFetch',
  data() {
    return {
      formData: {
        Title: '',
        Description: '',
        ImageURL: '',
        Content: '',
        AdminID: null,
      },
      message: ''
    };
  },
  methods: {
    async submitData() {
      if (!process.env.VUE_APP_API_URL) {
        this.message = 'Ошибка: VUE_APP_API_URL не определен в окружении.';
        console.error(this.message);
        return;
      }

      const dataToSend = { ...this.formData };

      try {
        const apiUrl = `${ process.env.VUE_APP_API_URL }/posts`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
          let errorMessage = 'connection or server error ';
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
          } catch (jsonError) {
            errorMessage = `Ошибка сервера: ${ response.status } ${ response.statusText }`;
          }
          throw new Error(errorMessage);
        }

        const data = await response.json();
        this.message = 'data sent succesfully: ' + JSON.stringify(data);

        this.formData = {
          Title: '',
          Description: '',
          ImageURL: '',
          Content: '',
          AdminID: null,
        };

      } catch (error) {
        this.message = 'error: ' + error.message;
        console.error('error: ', error);
      }
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 20px;
  font-weight: bold;
}
</style>
