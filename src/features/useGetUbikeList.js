import { useQuery } from "@tanstack/react-query";

import { Api } from "@/service/api";

export const useGetUbikeList = () => {
  const query = useQuery({
    queryKey: ["ubikeList"],
    queryFn: () => Api.get("/youbike_immediate.json"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return query;
};
