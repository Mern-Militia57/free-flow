import React, { useContext } from "react";
import { AuthContextPro } from "../AuthProviderFiles/AuthProviderPro";
import useMagicAxiosBoss from "./useMagicAxiosBoss";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { userProfile, loader } = useContext(AuthContextPro);
  const [axiosMagic] = useMagicAxiosBoss();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", userProfile?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosMagic.get(`/users/admin/${userProfile?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
