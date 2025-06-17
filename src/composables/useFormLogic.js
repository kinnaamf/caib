import { ref } from 'vue'

export function useFormLogic() {
  const form = ref({name: '', email: '', phone: ''})

  function resetForm() {
    form.value = {name: '', email: '', phone: ''}
  }

  return { form, resetForm }
}
