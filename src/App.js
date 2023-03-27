import CardList from "./components/CardList";

export default function App() {
  return (
    <div className="relative p-2 flex flex-none overflow-x-auto h-screen w-full overflow-y-hidden">
      <CardList title={"Incomplete"} />
      <CardList title={"To do"} />
      <CardList title={"Doing"} />
      <CardList title={"Under Review"} />
      <CardList title={"Completed"} />
      <CardList title={"Overdue"} />
    </div>
  );
}
