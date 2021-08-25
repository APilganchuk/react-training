import Clock from "../training/Clock/Clock";
import Counter from "../training/Counter/Counter";
import Demo from "../training/Demo";
import UserMenu from "../training/UserMenu.js/UserMenu";
export default function BooksView() {
  return (
    <>
      <Demo />
      <Counter />
      <hr />
      <Clock />
      <hr />
      <UserMenu />
    </>
  );
}
