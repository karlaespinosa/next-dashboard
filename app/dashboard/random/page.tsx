import { cacheLife } from "next/cache";

/* eslint-disable react-hooks/purity */
export default async function RandomPage() {
  "use cache";

  cacheLife({
    stale: 5,
    revalidate: 10,
    // expire: 86400,
  });

  const random = Math.random();
  const now = Date.now();

  return (
    <div>
      <p>{random}</p>
      <p>{now}</p>
    </div>
  );
}
