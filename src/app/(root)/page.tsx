import { auth } from "auth";
import AnalyticsCard from "~/components/dashboard/AnalyticsCard";
import AreaChart from "~/components/dashboard/charts/AreaChart";
import PieChart from "~/components/dashboard/charts/PieChart";
import RadialChart from "~/components/dashboard/charts/RadialChart";
import EventsCard from "~/components/dashboard/EventsCard";
import { eventsData } from "~/constants/events";

export default async function Home() {
  const session = await auth();
  // if (!session) redirect("/sign-in");

  return (
    <div className="h-full w-full px-1">
      <div className="grid h-full w-full grid-cols-1  gap-7 pb-16 pt-8 xl:grid-cols-2">
        <AnalyticsCard title="Your sales" actions="calendar">
          <RadialChart />
        </AnalyticsCard>
        <AnalyticsCard
          title="Latest Events"
          actions="button"
          btnText="view all"
        >
          <div className="flex w-full flex-col gap-4">
            {eventsData.map((event, i) => (
              <EventsCard key={i} event={event} />
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
