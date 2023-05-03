import axiosApi from './axiosApi';

const searchApi = async (name: string) => {
  const response = await axiosApi.get(`/?name=${name}`);
  return response.data;
};

export default searchApi;
