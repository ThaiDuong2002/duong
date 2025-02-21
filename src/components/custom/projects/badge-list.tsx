import { Badge } from "@/components/ui/badge";

const BadgeList = ({ badges }: { badges: Array<string> }) => {
  return (
    <div className="flex-wrap space-y-2">
      {badges.map((badge, index) => (
        <Badge key={index} variant="outline" className="mr-2 text-md">
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
