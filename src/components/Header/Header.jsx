import profile from '../../assets/img/boy2.png'
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="w-24 h-24" src={profile} alt="" />
    </header>
  );
};

export default Header;