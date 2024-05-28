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
import StatusCardWrapper from "~/components/dashboard/StatusCardWrapper";

const AreaChartComponent = dynamic(
  () => import("~/components/dashboard/charts/AreaChart"),
  { ssr: false },
);
const BarChartComponent = dynamic(
  () => import("~/components/dashboard/charts/BarChart"),
  { ssr: false },
);
const RadialChartComponent = dynamic(
  () => import("~/components/dashboard/charts/RadialChart"),
  { ssr: false },
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
    <div className="mb-16 flex h-full w-full flex-col gap-6 px-4 py-4 md:px-0">
      <div className=" flex w-full flex-col items-center gap-5 md:flex-row">
        <WelcomeBanner />
        <ProfileCard />
      </div>
      <div className="w-full">
        <StatusCardWrapper />
      </div>
      <div className="grid h-full w-full grid-cols-1 gap-3.5 md:grid-cols-2  md:px-0 lg:grid-cols-3">
        <AnalyticsCard
          loading
          title="Latest Events"
          actions="link"
          btnText="View All"
          className="w-full bg-transparent md:bg-card lg:col-span-2"
        >
          <div className="flex w-full flex-col gap-3.5 px-3.5 lg:mt-2">
            {eventsData.map((event, i) => (
              <EventsCard key={i} event={event} />
            ))}
          </div>
        </AnalyticsCard>
        <AnalyticsCard
          loading
          title="Your sales"
          actions="calendar"
          className="col-span-1"
        >
          <RadialChartComponent />
        </AnalyticsCard>
        <AnalyticsCard
          loading
          title="Income breakdown"
          actions="calendar"
          className="md:col-span-2 lg:col-span-3"
        >
          <BarChartComponent />
        </AnalyticsCard>

        <AnalyticsCard
          loading
          title="Income Details"
          actions="calendar"
          className="md:col-span-2 lg:col-span-3"
        >
          <AreaChartComponent />
        </AnalyticsCard>
      </div>
    </div>
  );
}
