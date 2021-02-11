const setInterceptorsToApiInstance = api => {
  api.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = token;
      }
      return config;
    },
    error => {
      Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    response => {
      // if (response.status === 200) {
      //   localStorage.removeItem('token');
      // }
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response;
    },
    error => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');

        // router.history.push('/auth/login');
      }
      return Promise.reject(error);
    },
  );
};

export default setInterceptorsToApiInstance;
