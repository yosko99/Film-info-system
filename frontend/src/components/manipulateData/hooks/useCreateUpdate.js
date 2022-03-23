import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useCreateUpdate = (link, instruction) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const queryKey = link.split('/')[2];

  const postMutation = useMutation((data) => {
    if (instruction === 'create') {
      return axios.post(link, { data });
    } else {
      return axios.put(link, { data });
    }
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: (err) => {
      navigate('/404', { state: { err } });
    }
  });

  return postMutation;
};

export default useCreateUpdate;
