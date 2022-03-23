import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useHandleDelete = (link, id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const queryKey = link.split('/')[2];
  const backUrl = `/${window.location.pathname.split('/')[1]}`;

  const postMutation = useMutation(() => {
    return axios.delete(link + id);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      alert('Данните са изтрити успешно!');
      navigate(backUrl);
    },
    onError: (err) => {
      navigate('/404', { state: { err } });
    }
  });

  return postMutation;
};

export default useHandleDelete;
