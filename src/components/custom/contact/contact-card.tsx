import { ContactCardProps } from "@/interface";
import CopyButton from "../copy-button";

const ContactCard = ({
  icon,
  title,
  subtitle,
  copyValue,
}: ContactCardProps) => {
  return (
    <div className="flex items-center justify-between w-full border rounded-md p-4">
      <div className="flex items-center space-x-4">
        {icon}
        <div className="flex-1 space-y-1">
          <p className="text-lg font-medium leading-none">{title}</p>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <CopyButton value={copyValue} />
    </div>
  );
};

export default ContactCard;
