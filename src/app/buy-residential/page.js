import BuyResidentialPage from "@/components/templates/BuyResidentialPage";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  if (data.error) return <h3>یک مشکلی پیش آمده است</h3>;
  return <BuyResidentialPage data={data.data} />;
}
