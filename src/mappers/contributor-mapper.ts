import ContributorInfoDto from "@/dto/contributor-info-dto";
import Contributor from "@/entity/contributor";

class ContributorMapper {
  public static mapToContributor(
    contributorInfoDto: ContributorInfoDto,
    contributor: Contributor
  ): Contributor {
    contributor.setLogin(contributorInfoDto.getLogin());
    contributor.setAvatarUrl(contributorInfoDto.getAvatarUrl());
    contributor.setHtmlUrl(contributorInfoDto.getHtmlUrl());

    return contributor;
  }

  public static mapToContributorInfoDto(
    contributor: Contributor,
    contributorInfoDto: ContributorInfoDto
  ): ContributorInfoDto {
    contributorInfoDto.setLogin(contributor.getLogin());
    contributorInfoDto.setAvatarUrl(contributor.getAvatarUrl());
    contributorInfoDto.setHtmlUrl(contributor.getHtmlUrl());

    return contributorInfoDto;
  }

  public static mapToContributorsInfoDto(
    contributors: Contributor[],
    contributorsInfoDto: ContributorInfoDto[]
  ): ContributorInfoDto[] {
    contributorsInfoDto = contributors.map((contributor) => {
      const contributorInfoDto = new ContributorInfoDto();
      contributorInfoDto.setLogin(contributor.login);
      contributorInfoDto.setAvatarUrl(contributor.avatar_url);
      contributorInfoDto.setHtmlUrl(contributor.html_url);
      return contributorInfoDto;
    });

    return contributorsInfoDto;
  }
}

export default ContributorMapper;
