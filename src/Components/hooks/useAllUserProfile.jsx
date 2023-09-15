

import useMagicAxiosBoss from "./useMagicAxiosBoss";
import { useQuery } from "react-query";


const useAllUserProfile = () => {
   
    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: userDetails = [] } =
        useQuery(['userDetails'], async () => {
         const res = await axiosMagic.get(`/user_details`)
                return res.data
            
        })
       return [userDetails,refetch]

};

export default useAllUserProfile;