import axiosInstance from '../axios/axios';

const todoService = {
  create: data => {
    const csrfToken = document.querySelector("meta[name='csrf-token']").content;
    const headers = {
      'X-CSRF-Token': csrfToken,
    }
    return axiosInstance
      .post(
        'todos',
        data,
        { headers }
        )
  },
  all: () => {
    return axiosInstance.get('todos')
  },
  update: ({ id, data }) => {
    const csrfToken = document.querySelector("meta[name='csrf-token']").content;
    const headers = {
      'X-CSRF-Token': csrfToken,
    }
    return axiosInstance.put(`todos/${id}`, data, { headers })
  },
  get: id => {
    return axiosInstance.get(`todos/${id}`);
  }
}

export default todoService;
