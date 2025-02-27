import ContributorController from "@/data-fetching/controllers/contributor-controller";
import ErrorResponseDto from "@/data-fetching/dto/error-response-dto";

const fetchData = async (owner: string, repository: string) => {
  const contributors = await ContributorController.getContributorsInfo(
    owner,
    repository
  );

  if (contributors instanceof ErrorResponseDto) {
    console.error(contributors);
    return null;
  } else {
    return contributors.getData();
  }
};

export default fetchData;
