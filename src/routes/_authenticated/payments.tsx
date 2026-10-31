import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common";
export const Route = createFileRoute("/_authenticated/payments")({
  head: () => ({ meta: [{ title: "Payments — SubscriptIQ" }] }),
  component: () => <PageHeader title="Payments" subtitle="This page is not finished yet." />,
});
