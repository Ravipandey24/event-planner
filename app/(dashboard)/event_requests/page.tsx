import { DataTable } from "@/components/widgets/event-table";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
      <Card className="border-primary">
        <CardContent>
          <DataTable />
        </CardContent>
      </Card>
  );
}
