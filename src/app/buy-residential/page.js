import BuyResidentialPage from "@/components/templates/BuyResidentialPage";

async function page({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  if (data.error) return <h3>یک مشکلی پیش آمده است</h3>;
  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }
  return <BuyResidentialPage data={finalData} />;
}

export default page;
