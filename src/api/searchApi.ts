import axiosApi from './axiosApi';

const searchApi = async (name: any) => {
  const response = await axiosApi.get(`/?name=${name}`);
  return response.data;
};

export default searchApi;
