import Link from "next/link";
import Head from "next/head";

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
            <Link key={company.id} href={`/companies/${company.id}`}>
              <a className="p-5 rounded-lg overflow-hidden max-w-xl bg-neutral-800 flex gap-6 w-full mx-auto flex-col">
                <div className="h-24 flex items-center justify-center ">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className=" rounded-lg max-h-[6rem] max-w-[12rem]"
                  />
                </div>
                <div className="h-full flex flex-col">
                  <h2 className="text-2xl font-bold">{company.name}</h2>
                  <p className="text-sm">{company.summery}</p>

                  {/* <p className="font-bold mt-auto pt-4">Advocates: {company.id}</p> */}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
export default Companies;
