import axios, { AxiosError, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

// 응답 인터셉터
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },

  (error: AxiosError) => {
    if (!error.response) {
      // 네트워크 오류
      return Promise.reject({ message: 'Network Error' });
    }

    const status = error.response.status;

    // 상태 코드별 맞춤 에러 메시지
    switch (status) {
      case 400:
        return Promise.reject({ message: '잘못된 요청입니다.' });
      case 401:
        return Promise.reject({ message: '권한이 없습니다. 로그인 필요.' });
      case 403:
        return Promise.reject({ message: '접근이 금지되었습니다.' });
      case 404:
        return Promise.reject({ message: '요청한 리소스를 찾을 수 없습니다.' });
      case 500:
        return Promise.reject({ message: '서버 오류가 발생했습니다.' });
      default:
        return Promise.reject({ message: '알 수 없는 오류가 발생했습니다.' });
    }
  }
);

export default api;
