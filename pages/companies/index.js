import Link from "next/link";
import Head from "next/head";

const Companies = () => {
  return (
    <>
      <Head>
        <title>Companies</title>
      </Head>
      <section>
        <div className="container mx-auto px-5 py-28 grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {[...Array(12)].map((n, i) => (
            <Link key={i} href={`companies/${i}`}>
              <a className="p-5 rounded-lg overflow-hidden max-w-xl bg-neutral-800 flex gap-6 w-full mx-auto">
                <img
                  src="https://gavn.in/img/logo.jpg"
                  alt=""
                  className="h-48 rounded-lg "
                />
                <div className="h-full flex flex-col">
                  <h2 className="text-2xl font-bold">GavinPereira.in</h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    corrupti voluptatibus quas.
                  </p>

                  <p className="font-bold mt-auto pt-4">Advocates: {i}</p>
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
