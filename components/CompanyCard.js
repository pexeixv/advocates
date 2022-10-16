import Link from "next/link";

const CompanyCard = ({ company }) => {
  return (
    <Link key={company.id} href={`/companies/${company.id}`}>
      <a className="p-5 rounded-lg overflow-hidden max-w-xl bg-neutral-800 flex gap-6 w-full mx-auto flex-col relative bottom-0 hover:bottom-1">
        <div className="h-24 flex items-center justify-center ">
          <img
            src={company.logo}
            alt={company.name}
            className=" rounded-lg max-h-[6rem] max-w-[12rem]"
          />
        </div>
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold">{company.name}</h2>
          <p className="text-sm">{company.bio}</p>

          {/* <p className="font-bold mt-auto pt-4">Advocates: {company.id}</p> */}
        </div>
      </a>
    </Link>
  );
};
export default CompanyCard;
