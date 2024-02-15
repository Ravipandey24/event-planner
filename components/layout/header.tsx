import UserCard from "../widgets/user-card";

const Header = ({}) => {
  return (
    <header className="sticky top-0 z-40 w-full drop-shadow-lg bg-background">
      <div className="container flex h-20 items-center space-x-4 justify-end">
        <UserCard></UserCard>
      </div>
    </header>
  );
};

export default Header;
