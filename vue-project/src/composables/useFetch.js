import { onMounted, ref } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  onMounted(async () => {
    loading.value = true
    error.value = null

    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      data.value = await res.json()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  })

  return { data, error, loading }
}