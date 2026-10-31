import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common";
export const Route = createFileRoute("/_authenticated/invoices/\$id")({
  head: () => ({ meta: [{ title: "Invoice — SubscriptIQ" }] }),
  component: () => <PageHeader title="Invoice" subtitle="This page is not finished yet." />,
});
