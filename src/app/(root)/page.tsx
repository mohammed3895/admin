"use client";
import AnalyticsCard from "~/components/dashboard/AnalyticsCard";
import EventsCard from "~/components/dashboard/EventsCard";
import { eventsData } from "~/constants/events";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { useEffect, useState } from "react";
import WelcomeBanner from "~/components/dashboard/WelcomeBanner";
import Image from "next/image";
import ProfileCard from "~/components/shared/ProfileCard";

const AreaChartComponent = dynamic(
  () => import("~/components/dashboard/charts/AreaChart"),
);
const BarChartComponent = dynamic(
  () => import("~/components/dashboard/charts/BarChart"),
);
const RadialChartComponent = dynamic(
  () => import("~/components/dashboard/charts/RadialChart"),
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="mb-16 h-full w-full">
      <div className="mb-8 mt-4 flex w-full flex-col items-center gap-5 border-b pb-8 md:flex-row">
        <WelcomeBanner />
        <ProfileCard />
      </div>
      <div className="md:px0 grid h-full w-full  grid-cols-1 gap-3.5  md:px-0 lg:grid-cols-2">
        <AnalyticsCard
          loading
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
        <AnalyticsCard loading title="Your sales" actions="calendar">
          <RadialChartComponent />
        </AnalyticsCard>
        <AnalyticsCard
          loading
          title="Income breakdown"
          actions="calendar"
          className="col-span-1"
        >
          <BarChartComponent />
        </AnalyticsCard>
        <AnalyticsCard loading title="Income Details" actions="calendar">
          <AreaChartComponent />
        </AnalyticsCard>
      </div>
    </div>
  );
}
