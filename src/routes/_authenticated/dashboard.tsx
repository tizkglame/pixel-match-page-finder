import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common";
export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — SubscriptIQ" }] }),
  component: () => <PageHeader title="Dashboard" subtitle="This page is not finished yet." />,
});
