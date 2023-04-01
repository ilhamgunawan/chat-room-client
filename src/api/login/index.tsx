import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { useMutation } from 'react-query';

import type { ILogin, IUser } from '@/types/user';

export interface ILoginResponse {
  data: IUser;
}

export const useLoginApi = () => {
  return useMutation<AxiosResponse<ILoginResponse>, unknown, ILogin>({
    mutationFn: (body) => {
      return axios.post('/api/auth/login', body);
    },
  });
};
