import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import { useQuery } from "react-query";

const usePayment = () => {
  const [axiosMagic] = useMagicAxiosBoss();
  const {
    data: paymentOrders = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["paymentOrders"],
    queryFn: async () => {
      const res = await axiosMagic.get(`/payment`);
      return res.data;
    },
  });
  return [paymentOrders, refetch, loading];
};

export default usePayment;
