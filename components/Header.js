import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-neutral-800">
      <div className="container mx-auto px-5 py-5 flex items-center justify-between">
        <Link href={`/`}>
          <a className="text-xl font-black ">CodeBattles</a>
        </Link>
        <nav className="flex items-center gap-5">
          <Link href={`/advocates`}>
            <a>Advocates</a>
          </Link>
          <Link href={`/companies`}>
            <a>Companies</a>
          </Link>
          <a
            target="_blank"
            href="https://codebattle.up.railway.app/event/dce4b8cd-b48d-4511-b4d6-b0058c179944/"
            rel="noreferrer"
          >
            Info
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
