import { ErrorConstants, HttpMessage, HttpStatus } from "@/constants";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";
import ErrorResponseDto from "@/data-fetching/dto/error-response-dto";
import ResponseDto from "@/data-fetching/dto/response-dto";
import {
  BadRequestException,
  ForbiddenException,
  InternalServerException,
  NotFoundException,
  UnauthorizedException,
} from "@/data-fetching/exceptions";
import ContributorService from "@/data-fetching/services/contributor-service";

const ContributorController = {
  /**
   * Retrieves a list of contributors for a given repository.
   *
   * @param {string} owner - The owner of the repository.
   * @param {string} repo - The name of the repository.
   * @returns {Promise<ResponseDto<ContributorInfoDto[]> | ErrorResponseDto>}  A list of contributors.
   */
  getContributorsInfo: async (
    owner: string,
    repo: string
  ): Promise<ResponseDto<ContributorInfoDto[]> | ErrorResponseDto> => {
    try {
      const contributors = await ContributorService.getContributors(
        owner,
        repo
      );

      return new ResponseDto(
        HttpStatus.OK,
        HttpMessage.SUCCESS_CONTRIBUTORS,
        contributors
      );
    } catch (error) {
      if (error instanceof BadRequestException) {
        return new ErrorResponseDto(
          HttpStatus.BAD_REQUEST,
          error.message,
          error.documentationUrl
        );
      } else if (error instanceof UnauthorizedException) {
        return new ErrorResponseDto(
          HttpStatus.UNAUTHORIZED,
          error.message,
          error.documentationUrl
        );
      } else if (error instanceof ForbiddenException) {
        return new ErrorResponseDto(
          HttpStatus.FORBIDDEN,
          error.message,
          error.documentationUrl
        );
      } else if (error instanceof NotFoundException) {
        return new ErrorResponseDto(
          HttpStatus.NOT_FOUND,
          error.message,
          error.documentationUrl
        );
      } else if (error instanceof InternalServerException) {
        return new ErrorResponseDto(
          HttpStatus.INTERNAL_SERVER_ERROR,
          error.message,
          error.documentationUrl
        );
      } else {
        return new ErrorResponseDto(
          HttpStatus.INTERNAL_SERVER_ERROR,
          ErrorConstants.INTERNAL_SERVER,
          ErrorConstants.RATE_LIMITING_URL
        );
      }
    }
  },
};

export default ContributorController;
