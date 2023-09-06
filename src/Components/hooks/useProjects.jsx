import { useQuery } from "react-query";

const useProjects = () => {
  const {
    data: projects = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/projects");
      return res.json();
    },
  });
  return [projects, loading, refetch];
};

export default useProjects;
