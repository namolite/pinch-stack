import axios from 'axios';
import { useEffect } from 'react';

const useAuth = () => {
  // 用于检查和更新登录状态的逻辑
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 可以在这里添加更多逻辑来验证令牌的有效性
    }
  }, []);

  const login = async (username, password) => {
    const url = '/api/login'; // 你的登录API路径
    try {
      const response = await axios.post(url, { username, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 登录成功后的逻辑
    } catch (error) {
      console.error('登录失败', error);
      // 处理登录失败的逻辑
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
    // 注销后的逻辑
  }

  return { login };
};

export default useAuth;
