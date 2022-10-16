import Link from "next/link";
import Head from "next/head";
import AdvocateCard from "../../components/AdvocateCard";

export async function getServerSideProps(context) {
  const res = await fetch("https://cados.up.railway.app/advocates/");
  const json = await res.json();
  const advocates = await json.advocates;

  return { props: { advocates } };
}

const Advocates = ({ advocates }) => {
  return (
    <>
      <Head>
        <title>Advocates</title>
      </Head>
      <section>
        <div className="container mx-auto px-5 py-28 grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {advocates.map((advocate) => (
            <AdvocateCard advocate={advocate} key={advocate.url} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Advocates;
