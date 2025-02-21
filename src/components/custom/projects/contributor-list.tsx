import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";

const ContributorList = ({
  contributors,
}: {
  contributors: ContributorInfoDto[];
}) => {
  return (
    <div className="flex flex-row gap-3">
      {contributors.length > 0 &&
        contributors.map((contributor, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar>
                  <AvatarImage src={contributor.getAvatarUrl()} alt="" />
                  <AvatarFallback>
                    {contributor.getLogin().substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>{contributor.getLogin()}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
    </div>
  );
};

export default ContributorList;
