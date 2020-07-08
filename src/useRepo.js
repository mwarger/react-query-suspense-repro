import { useQuery } from "react-query";
import axios from "axios";

const axiosInstance = axios.create();

const repoName = "react-query";

const repoUrl = "https://api.github.com/repos/tannerlinsley/";

export const useRepo = (name = repoName) => {
  return useQuery(
    [repoUrl, name],
    (url, repo) =>
      axiosInstance.get(url + repo, {}).then((response) => {
        return response.data;
      }),
    { suspense: true, enabled: repoName }
  );
};
