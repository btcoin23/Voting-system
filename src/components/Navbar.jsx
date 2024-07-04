import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-center gap-2 text-lg p-4">
        <Link href="/">Home</Link>
        <Link href="/register">Register</Link>
        <Link href="/vote">Vote</Link>
        <Link href="/voters">Voters</Link>
        <Link href="/transfer">Transfer Votes</Link>
        <Link href="/addCandidate">Add Candidate</Link>
        <Link href="/candidates">Candidates</Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
