import SelectMenu from './ui/SelectMenu';
import SearchInput from './ui/SearchInput';

export default function Form() {
  return (
    <div className="container">
      <form className="form">
        <SearchInput />
        <SelectMenu />
      </form>
    </div>
  );
}
