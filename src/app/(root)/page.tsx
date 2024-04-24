import { auth, signOut } from "auth";
import {
  FilePlus2,
  MapPinned,
  UserCircle,
  UserRoundSearch,
} from "lucide-react";
import { redirect } from "next/navigation";
import AnalyticsCard from "~/components/dashboard/AnalyticsCard";
import AreaChart from "~/components/dashboard/charts/AreaChart";
import PieChart from "~/components/dashboard/charts/PieChart";
import RadialChart from "~/components/dashboard/charts/RadialChart";

const eventsData = [
  {
    title: "Invoice #AA-BB-CC",
    data: "New Madietion",
    details: "$118.00",
    icon: UserRoundSearch,
  },
  {
    title: "Invoice #AA-BB-CC",
    data: "New Madietion",
    details: "$118.00",
    icon: UserCircle,
  },
  {
    title: "Invoice #AA-BB-CC",
    data: "New Madietion",
    details: "$118.00",
    icon: FilePlus2,
  },
  {
    title: "Invoice #AA-BB-CC",
    data: "New Madietion",
    details: "$118.00",
    icon: MapPinned,
  },
];

export default async function Home() {
  const session = await auth();
  // if (!session) redirect("/sign-in");

  return (
    <div className="h-full w-full px-1">
      {/* {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Signout</button>
      </form> */}
      <div className="grid h-full w-full grid-cols-1  gap-8 pb-16 pt-8 xl:grid-cols-2">
        <AnalyticsCard title="Your sales" actions="calendar">
          <RadialChart />
        </AnalyticsCard>
        <AnalyticsCard
          title="Latest Events"
          actions="button"
          btnText="view all"
        >
          <div className="flex w-full flex-col gap-4">
            {eventsData.map((_, i) => (
              <div
                key={i}
                className="mb-2.5 flex w-full items-center justify-start gap-3"
              >
                <div className=" flex items-center justify-center rounded-lg bg-purple-2 p-2 md:p-3.5">
                  <_.icon size={20} className=" text-purple-1" />
                </div>

                <div className="flex w-full items-center">
                  <div className="flex w-3/4 flex-col justify-start gap-1">
                    <h1 className="text-sm font-semibold md:text-base">
                      {_.title}
                    </h1>
                    <h3 className="text-sm font-medium text-gray-600 md:text-base">
                      {_.data}
                    </h3>
                  </div>
                  <div className="flex w-1/3 items-center justify-end text-nowrap">
                    <p className="text-sm font-semibold md:text-base">
                      {_.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnalyticsCard>
        <AnalyticsCard title="Income breakdown" actions="calendar">
          <PieChart />
        </AnalyticsCard>
        <AnalyticsCard title="Income Details" actions="calendar">
          <AreaChart />
        </AnalyticsCard>
      </div>
    </div>
  );
}
