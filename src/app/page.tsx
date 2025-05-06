import AppPieChart from "@/components/app-pie-chart";
import { AreaChartBar } from "@/components/area-chart";
import BarChartComp from "@/components/bar-chart";
import CardList from "@/components/cardlist/card-list";
import TodoList from "@/components/todo/todo-list";

export default function Home() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    <div className="bg-primary-foreground p-4 rounded-lg">
      <BarChartComp/>
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg">
      <CardList title="Popular Content"/>
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg">
      <TodoList/>
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transaction"/></div>
    <div className="bg-primary-foreground p-4 rounded-lg">
      <AreaChartBar/>
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg">
      <AppPieChart/>
    </div>
   </div>
  );
}
