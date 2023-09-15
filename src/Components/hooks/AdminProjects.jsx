import React, { useContext } from "react";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import { useQuery } from "react-query";

const AdminProjects = () => {
  const { loader } = useContext(AuthContextPro);
  const [axiosMagic] = useMagicAxiosBoss();
  const { data: adminProjects = [], refetch } = useQuery({
    queryKey: ["adminProjects"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosMagic(`/projects`);
      return res.data;
    },
  });
  return [adminProjects, refetch];
};

export default AdminProjects;
