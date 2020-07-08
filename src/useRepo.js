import { useQuery } from "react-query";
import axios from "axios";

const axiosInstance = axios.create();

const repoName = "tannerlinsley/react-query";

const repoUrl = "/repos/";

export const useRepo = (name = repoName) => {
  return useQuery(
    [repoUrl, name],
    (url, repo) => {
      const repo_url = url + repo;
      console.log("repo_url", repo_url);
      return axiosInstance.get(repo_url).then((response) => {
        return response.data;
      });
    },
    { suspense: true, enabled: repoName }
  );
};
