import React from "react";
import MoreBtn from "../buttons/MoreBtn";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface Props {
  activity:
    | {
        id: string;
        name: string;
        description: string;
        images: {
          src: string;
        }[];
        author: {
          id: string;
          name: string;
          avatar: string;
        };
      }
    | {
        id: string;
        name: string;
        description: string;
        author: {
          id: string;
          name: string;
          avatar: string;
        };
        images?: undefined;
      };
}

const ActivityCard = ({ activity }: Props) => {
  return (
    <div className="mb-3 flex w-full flex-col items-start gap-1 rounded-xl bg-accent p-4 md:p-6">
      <div className="mb-1 flex w-full items-center justify-between">
        <h2 className="font-medium tracking-tight dark:text-gray-50">
          {activity.name}
        </h2>
        <MoreBtn />
      </div>

      <div className="w-full">
        <p className="w-full text-sm font-light tracking-tight text-muted-foreground md:w-3/4 lg:w-1/2">
          {activity.description}
        </p>
      </div>

      {activity.images && (
        <div className="mt-2 grid w-fit grid-cols-3 items-start justify-start gap-2.5">
          {activity.images.map((img, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="h-20 w-20 rounded-lg md:h-36 md:w-40" key={i}>
                  <Image
                    src={img.src}
                    alt={`Activity image ${i + 1}`}
                    width={300}
                    height={175}
                    objectFit="cover"
                    quality={80}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="h-fit w-3/4 p-0">
                <div className="h-full w-full" key={i}>
                  <Image
                    src={img.src}
                    alt={`Activity image ${i + 1}`}
                    width={900}
                    height={900}
                    objectFit="contain"
                    className="h-full w-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center justify-start gap-3">
        <div className="h-8 w-8 rounded-md">
          <Image
            src={activity.author.avatar}
            alt={activity.author.name}
            width={50}
            height={50}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <h3 className="text-sm font-medium capitalize tracking-wide text-muted-foreground">
          {activity.author.name}
        </h3>
      </div>
    </div>
  );
};

export default ActivityCard;
