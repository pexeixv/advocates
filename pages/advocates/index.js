import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps(context) {
  const res = await fetch("https://cados.up.railway.app/advocates").then((r) =>
    r.json()
  );

  const advocates = res.advocates;
  return { props: { advocates } };
}

const yearsOfExperience = (dateString) => {
  const dateOfStart = new Date(dateString);
  const now = new Date(Date.now());
  const years = now.getFullYear() - dateOfStart.getFullYear();
  const plural = years == 1 ? "yr" : "yrs";
  const string = `Experience: ${years} ${plural}`;
  return string;
};

const Advocates = ({ advocates }) => {
  return (
    <>
      <Head>
        <title>Advocates</title>
      </Head>
      <section>
        <div className="container mx-auto px-5 py-28 grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {advocates.map((advocate) => (
            <Link key={advocate.id} href={`/advocates/${advocate.id}`}>
              <a className="p-5 rounded-lg overflow-hidden max-w-xl bg-neutral-800 flex gap-6 w-full mx-auto">
                <img
                  src={advocate.profile_pic}
                  alt={advocate.name}
                  className="h-48 rounded-lg "
                />
                <div className="h-full flex flex-col">
                  <h2 className="text-2xl font-bold">{advocate.name}</h2>
                  <p className="font-bold italic ">{advocate.company.name}</p>
                  <p className="text-sm">{advocate.short_bio}</p>

                  <p className="font-bold mt-auto pt-4">
                    {yearsOfExperience(advocate.advocate_since)}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
export default Advocates;
