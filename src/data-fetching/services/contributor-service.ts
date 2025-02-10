import {
  apiContributors,
  ErrorConstants,
  HttpMethod,
  HttpStatus,
} from "@/constants";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";
import Contributor from "@/data-fetching/entity/contributor";
import {
  BadRequestException,
  ForbiddenException,
  InternalServerException,
  NotFoundException,
  UnauthorizedException,
} from "@/data-fetching/exceptions";
import ContributorMapper from "@/data-fetching/mappers/contributor-mapper";
import dataInjection from "@/lib/data-injection";

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
        method: HttpMethod.GET,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === HttpStatus.OK) {
        const data = (await response.json()) as unknown[];

        const contributors = data.map((item) =>
          dataInjection(Contributor, item)
        );

        const contributorsInfo: ContributorInfoDto[] =
          ContributorMapper.mapToContributorsInfoDto(contributors, []);

        return contributorsInfo;
      } else if (response.status === HttpStatus.BAD_REQUEST) {
        const error = await response.json();
        throw new BadRequestException(error.message, error.documentation_url);
      } else if (response.status === HttpStatus.UNAUTHORIZED) {
        const error = await response.json();
        throw new UnauthorizedException(error.message, error.documentation_url);
      } else if (response.status === HttpStatus.FORBIDDEN) {
        const error = await response.json();
        throw new ForbiddenException(error.message, error.documentation_url);
      } else if (response.status === HttpStatus.NOT_FOUND) {
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
