

import { useQuery } from 'react-query';
import useMagicAxiosBoss from './useMagicAxiosBoss';



const useAllGigsPost = () => {
    
    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: usergigs = [] } =
          useQuery(['usergigs'], async () => {
         const res = await axiosMagic.get(`/gigs_provide`)
                return res.data
            
        })
       return [usergigs,refetch]
};

export default useAllGigsPost;




