import CabinCard from "@/app/_components/CabinCard";
import { getCabin } from "../_lib/data-service";
export default async function CabinList() {
  const cabins = await getCabin();
  if (!cabins || cabins.length === 0) {
    return (
      <p className="text-primary-200 text-lg">
        No cabins available at the moment.
      </p>
    );
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
