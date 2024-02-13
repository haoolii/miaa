import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type Task = {
  id: number;
  name: string;
  description: string;
  parameter: string;
};
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../shared/components/data-table";
import { Button } from "@/components/ui/button";

const data: Task[] = [
  {
    id: 1,
    name: "Transfer",
    description: "EVM Transfer",
    parameter: "{ from: address, to: address }",
  },
  {
    id: 1,
    name: "Swap",
    description: "Berachain Defi",
    parameter: "{ from: '0x...', to: '0x...' }",
  },
];

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "parameter",
    header: "Parameter",
  },
];
export const Task = () => {
  return (
    <div className="flex flex-col px-6 py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Task
        </h2>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
