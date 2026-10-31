import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common";
export const Route = createFileRoute("/_authenticated/invoices/")({
  head: () => ({ meta: [{ title: "Invoices — SubscriptIQ" }] }),
  component: () => <PageHeader title="Invoices" subtitle="This page is not finished yet." />,
});
