import { Card } from "@/components/ui/card";

import { SellForm } from "../components/form/Sellform";

import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";



export default async function SellRoute() {

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <SellForm />
      </Card>
    </section>
  );
}