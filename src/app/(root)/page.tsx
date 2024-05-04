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
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-1  gap-16 pb-16 pt-4 md:gap-6 lg:grid-cols-2">
        <AnalyticsCard
          title="Latest Events"
          actions="button"
          btnText="View All"
        >
          <div className="flex w-full flex-col gap-2 lg:mt-2">
            {eventsData.map((event, i) => (
              <EventsCard key={i} event={event} />
            ))}
          </div>
        </AnalyticsCard>
        <AnalyticsCard title="Your sales" actions="calendar">
          <RadialChart />
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
