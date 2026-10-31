import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common";
export const Route = createFileRoute("/_authenticated/staff")({
  head: () => ({ meta: [{ title: "Team & Roles — SubscriptIQ" }] }),
  component: () => <PageHeader title="Team & Roles" subtitle="This page is not finished yet." />,
});
