import SelectMenu from './ui/SelectMenu';
import SearchInput from './ui/SearchInput';

export default function Form() {
  return (
    <form className="form">
      <SearchInput />
      <SelectMenu />
    </form>
  );
}
