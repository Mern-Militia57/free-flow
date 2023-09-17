import React from 'react';
import { useQuery } from 'react-query';
import useMagicAxiosBoss from './useMagicAxiosBoss';

const usePaymenthistory = () => {

    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: paymenthistory = [] } =
           
          useQuery(['paymenthistory'],
           async () => {
         const res = await axiosMagic.get(`/payment_history`)
                return res.data
            
        })
       return [paymenthistory,refetch]
};

export default usePaymenthistory;













