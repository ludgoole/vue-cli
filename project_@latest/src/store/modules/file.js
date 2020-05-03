import axios from '@/api'
import path from '@/api/path'

const { download, upload } = path

export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async download ({ commit }, payload = {}) {
      const blob = await axios.download(download, payload)
      console.log(blob)
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')

      a.href = url
      a.download = payload.filename
      a.click()
    },
    async upload ({ commit }, payload = {}) {
      console.log(payload.file)
      const formData = new FormData()
      Object.keys(payload).forEach(key => {
        formData.append(key, payload[key])
      })

      return await axios.upload(upload, formData)
    }
  }
}
