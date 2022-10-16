import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const advocateId = params.id;
  const url = "https://cados.up.railway.app/advocates/";
  const advocate = await fetch(url + advocateId)
    .then((r) => r.json())
    .then((r) => r.advocate);

  const companies = [];

  const companyIds = advocate.companies;

  return {
    props: {
      advocate,
      companyIds,
    },
  };
}

const getReadableDate = (dateString) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const readableDate = `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
  return readableDate;
};

const Advocate = ({ advocate, companyIds }) => {
  let companies = [];
  companyIds.forEach(async (id) => {
    const coUrl = "https://cados.up.railway.app/companies/";
    const company = await fetch(coUrl + id)
      .then((r) => r.json())
      .then((r) => r.company);
    companies.push(company);
  });

  return (
    <>
      <Head>
        <title>{advocate?.name}</title>
      </Head>
      <section>
        <div className="container mx-auto px-5 py-28 flex flex-col lg:flex-row gap-12">
          <div className="h-80 w-80 rounded-lg bg-white grid place-items-center overflow-hidden">
            <img
              src={advocate?.profile_pic}
              alt={advocate?.name}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-6xl font-black">{advocate?.name}</h1>
            <p className="mt-4">{advocate?.bio}</p>
            {advocate?.advocate_since && (
              <p className="mt-8">
                Advocate since {getReadableDate(advocate?.advocate_since)}
              </p>
            )}
            {companies !== [] && (
              <div className="mt-4">
                <h2 className="font-bold text-2xl">Companies</h2>
                <div className="flex flex-wrap gap-3">
                  {companies.map((company) => {
                    <Link href={company?.url} key={company?.name}>
                      <a>{company?.name}</a>
                    </Link>;
                  })}
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-3">
              {advocate?.links?.map((link) => {
                return (
                  <a
                    href={link?.url}
                    key={link?.name}
                    className=" hover:opacity-60"
                  >
                    {link?.name}{" "}
                    <i
                      className={`fas fab fa-${link?.name?.toLowerCase()}`}
                    ></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Advocate;
