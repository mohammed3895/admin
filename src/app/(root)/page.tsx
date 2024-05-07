import AnalyticsCard from "~/components/dashboard/AnalyticsCard";
import EventsCard from "~/components/dashboard/EventsCard";
import { eventsData } from "~/constants/events";
import dynamic from "next/dynamic";

const AreaChartComponent = dynamic(
  () => import("~/components/dashboard/charts/AreaChart"),
);
const BarChartComponent = dynamic(
  () => import("~/components/dashboard/charts/BarChart"),
);
const RadialChart = dynamic(
  () => import("~/components/dashboard/charts/RadialChart"),
);

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="md:px0 grid h-full w-full  grid-cols-1 gap-3.5 px-3 pb-16 pt-4  md:px-0 lg:grid-cols-2">
        <AnalyticsCard
          title="Latest Events"
          actions="button"
          btnText="View All"
          className="bg-transparent md:bg-card"
        >
          <div className="flex w-full flex-col gap-3.5 px-3 md:px-5 lg:mt-2">
            {eventsData.map((event, i) => (
              <EventsCard key={i} event={event} />
            ))}
          </div>
        </AnalyticsCard>
        <AnalyticsCard title="Your sales" actions="calendar">
          <RadialChart />
        </AnalyticsCard>
        <AnalyticsCard title="Income breakdown" actions="calendar">
          <BarChartComponent />
        </AnalyticsCard>
        <AnalyticsCard title="Income Details" actions="calendar">
          <AreaChartComponent />
        </AnalyticsCard>
      </div>
    </div>
  );
}
