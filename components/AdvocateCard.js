import Link from "next/link";

const yearsOfExperience = (dateString) => {
  const dateOfStart = new Date(dateString);
  const now = new Date(Date.now());
  const years = now.getFullYear() - dateOfStart.getFullYear();
  const plural = years == 1 ? "yr" : "yrs";
  const string = `Experience: ${years} ${plural}`;
  return string;
};

const linkToId = (link) => {
  const linkArray = link.split("/");
  const id = linkArray[linkArray.length - 2];
  return id;
};

const shortenText = (text, limit) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
};

const AdvocateCard = ({ advocate }) => {
  return (
    <Link href={advocate?.url && `/advocates/${linkToId(advocate?.url)}`}>
      <a className="p-5 rounded-lg overflow-hidden max-w-xl bg-neutral-800 flex gap-6 w-full mx-auto relative bottom-0 hover:bottom-1">
        <img
          src={advocate?.profile_pic}
          alt={advocate?.name}
          className="h-48 rounded-lg "
        />
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold">{advocate?.name}</h2>
          <p className="mt-2 text-neutral-300 italic ">
            {advocate?.company?.name}
          </p>
          <p className="text-neutral-300  text-sm">
            {advocate?.bio && shortenText(advocate?.bio, 120)}
          </p>
          {advocate?.advocate_since && (
            <p className="text-neutral-300 mt-auto pt-4">
              {yearsOfExperience(advocate?.advocate_since)}
            </p>
          )}
        </div>
      </a>
    </Link>
  );
};
export default AdvocateCard;
