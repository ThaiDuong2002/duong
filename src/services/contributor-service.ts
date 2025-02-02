import apiContributors from "@/constants/contributors";
import ErrorConstants from "@/constants/errors";
import ContributorInfoDto from "@/dto/contributor-info-dto";
import Contributor from "@/entity/contributor";
import {
  BadRequestException,
  ForbiddenException,
  InternalServerException,
  NotFoundException,
  UnauthorizedException,
} from "@/exceptions";
import dataInjection from "@/lib/data-injection";
import ContributorMapper from "@/mappers/contributor-mapper";

const ContributorService = {
  /**
   * Retrieves a list of contributors for a given repository.
   *
   * @param {string} owner - The owner of the repository.
   * @param {string} repo - The name of the repository.
   * @returns {Promise<ContributorInfoDto[]>} - A list of contributors.
   */
  getContributors: async (
    owner: string,
    repo: string
  ): Promise<ContributorInfoDto[]> => {
    try {
      const response = await fetch(apiContributors(owner, repo), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = (await response.json()) as unknown[];

        const contributors = data.map((item) =>
          dataInjection(Contributor, item)
        );

        const contributorsInfo: ContributorInfoDto[] =
          ContributorMapper.mapToContributorsInfoDto(contributors, []);

        return contributorsInfo;
      } else if (response.status === 400) {
        const error = await response.json();
        throw new BadRequestException(error.message, error.documentation_url);
      } else if (response.status === 401) {
        const error = await response.json();
        throw new UnauthorizedException(error.message, error.documentation_url);
      } else if (response.status === 403) {
        const error = await response.json();
        throw new ForbiddenException(error.message, error.documentation_url);
      } else if (response.status === 404) {
        const error = await response.json();
        throw new NotFoundException(error.message, error.documentation_url);
      } else {
        throw new InternalServerException(
          ErrorConstants.INTERNAL_SERVER,
          ErrorConstants.RATE_LIMITING_URL
        );
      }
    } catch {
      throw new InternalServerException(
        ErrorConstants.INTERNAL_SERVER,
        ErrorConstants.RATE_LIMITING_URL
      );
    }
  },
};

export default ContributorService;
