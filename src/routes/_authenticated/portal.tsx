import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common";
export const Route = createFileRoute("/_authenticated/portal")({
  head: () => ({ meta: [{ title: "My Account — SubscriptIQ" }] }),
  component: () => <PageHeader title="My Account" subtitle="This page is not finished yet." />,
});
