import CabinCard from "@/app/_components/CabinCard";
import { getCabin } from "../_lib/data-service";
export default async function CabinList({ filter }) {
  const cabins = await getCabin();
  if (!cabins || cabins.length === 0) {
    return (
      <p className="text-primary-200 text-lg">
        No cabins available at the moment.
      </p>
    );
    let cabinDisplay;
    if ((filter = "small")) {
      cabinDisplay = cabins.filter((cabin) => cabin.capacity <= 3);
    }
    if ((filter = "medium")) {
      cabinDisplay = cabins.filter(
        (cabin) => cabin.capacity >= 4 && cabin.capacity <= 8
      );
    }
    if ((filter = "large")) {
      cabinDisplay = cabins.filter((cabin) => cabin.capacity >= 9);
    }
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabinDisplay.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
