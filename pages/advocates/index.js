import Link from "next/link";
import Head from "next/head";

const Advocates = () => {
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
                  src="https://gavn.in/img/gavin-pereira-sq.jpg"
                  alt=""
                  className="h-48 rounded-lg "
                />
                <div className="h-full flex flex-col">
                  <h2 className="text-2xl font-bold">Gavin Pereira</h2>
                  <p className="font-bold italic ">GavinPereira.in</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    corrupti voluptatibus quas.
                  </p>

                  <p className="font-bold mt-auto pt-4">
                    {i + 1 == 1 ? `${i + 1} year exp` : `${i + 1} years exp`}
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
