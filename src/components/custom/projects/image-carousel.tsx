import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import Image from "next/legacy/image";
import { ReactNode } from "react";

const ImageCarousel = ({
  list,
  header,
  className,
}: {
  list: Array<string>;
  header?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      {header}
      <Carousel className="w-full max-w-[80%]">
        <CarouselContent>
          {list.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center w-full h-full"
            >
              <div className="relative pb-[56.25%] w-full h-0">
                <Image
                  alt=""
                  src={image}
                  width={16}
                  height={9}
                  quality={100}
                  objectFit="cover"
                  layout="responsive"
                  className="border-muted-foreground rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {list.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
