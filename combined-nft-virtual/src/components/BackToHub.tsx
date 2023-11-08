import Link from "next/link";

const BackToHub = () => {
  return (
    <Link href="/">
      <button className="m-4 py-4 px-5 rounded border border-gray-300 bg-gray-700 w-fit">
        Back to Hub
      </button>
    </Link>
  );
};
export default BackToHub;
