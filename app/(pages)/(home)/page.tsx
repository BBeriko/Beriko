import Contact from "@/components/layout/home-page/contact";
import CustomerStatements from "@/components/layout/home-page/customer-statements";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";

export default function Home() {
  return (
    <main className="">
      <CustomerStatements />
      <FinishedJobCounter />
      <Contact />
    </main>
  );
}
