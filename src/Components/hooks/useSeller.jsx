import { useContext } from "react";
import useMagicAxiosBoss from "./useMagicAxiosBoss";
import { useQuery } from "react-query";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";

const useSeller = () => {
  const { userProfile, loader } = useContext(AuthContextPro);
  const [axiosMagic] = useMagicAxiosBoss();
  const { data: isSeller, isLoading: isSellerLoading } = useQuery({
    queryKey: ["isSeller", userProfile?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosMagic.get(`/users/seller/${userProfile?.email}`);
      return res.data.seller;
    },
  });
  return [isSeller, isSellerLoading];
};

export default useSeller;
