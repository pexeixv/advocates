import Head from "next/head";
import CompanyCard from "../../components/CompanyCard";

export async function getServerSideProps(context) {
  const res = await fetch("https://cados.up.railway.app/companies").then((r) =>
    r.json()
  );

  const companies = res.companies;
  return { props: { companies } };
}

const Companies = ({ companies }) => {
  return (
    <>
      <Head>
        <title>Companies</title>
      </Head>

      <section>
        <div className="container mx-auto px-5 py-28 grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {companies.map((company) => (
            <CompanyCard company={company} key={company.name} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Companies;
