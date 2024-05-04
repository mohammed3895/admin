import React from "react";
import MoreBtn from "../buttons/MoreBtn";
import { type ACTIVITIES } from "~/constants/activities";
import Image from "next/image";

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
    <div className="mb-3 flex w-full flex-col items-start gap-1 rounded-xl border p-4 dark:border-primary/5">
      <div className="mb-1 flex w-full items-center justify-between">
        <h2 className="font-semibold tracking-tight dark:text-gray-50">
          {activity.name}
        </h2>
        <MoreBtn />
      </div>

      <div className="w-full">
        <p className="w-full text-sm font-medium tracking-wide text-muted-foreground md:w-3/4 lg:w-1/2">
          {activity.description}
        </p>
      </div>

      {activity.images && (
        <div className="mt-2 grid w-full grid-cols-3 items-center justify-start gap-2.5">
          {activity.images.map((img, i) => (
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
        <h3 className="text-sm font-bold capitalize tracking-wide text-muted-foreground">
          {activity.author.name}
        </h3>
      </div>
    </div>
  );
};

export default ActivityCard;
