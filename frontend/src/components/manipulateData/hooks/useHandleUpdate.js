import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useCreateUpdate = (link) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const postMutation = useMutation((data) => {
    return axios.put(link, { data });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      navigate('/404', { state: { err } });
    }
  });

  return postMutation;
};

export default useCreateUpdate;
