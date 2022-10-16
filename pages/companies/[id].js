import Head from "next/head";
import AdvocateCard from "../../components/AdvocateCard";

export async function getServerSideProps({ params }) {
  const companyId = params.id;
  const url = "https://cados.up.railway.app/companies/";
  const response = await fetch(url + companyId);
  const json = await response?.json();
  const company = await json?.company;

  return {
    props: {
      company,
    },
  };
}

const Company = ({ company }) => {
  return (
    <>
      <Head>
        <title>{company?.name}</title>
      </Head>
      <section>
        <div className="container mx-auto px-5 py-28 flex flex-col lg:flex-row gap-12">
          <div className="h-80 w-80 rounded-lg bg-white grid place-items-center p-12">
            <img src={company?.logo} alt={company?.name} />
          </div>
          <div className="flex-1">
            <h1 className="text-6xl font-black">{company?.name}</h1>
            <p className="mt-4">{company?.bio}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-5 py-28 flex flex-col lg:flex-row gap-12">
          <h2 className="font-bold text-4xl">
            Advocates working at {company?.name}
            <div className="mt-16 grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
              {company?.advocates?.map((advocate) => {
                return <AdvocateCard advocate={advocate} key={advocate.url} />;
              })}
            </div>
          </h2>
        </div>
      </section>
    </>
  );
};
export default Company;
