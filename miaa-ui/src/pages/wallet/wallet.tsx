import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type Wallet = {
  id: number;
  name: string;
  description: string;
  address: string;
  privateKey: string;
};
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../shared/components/data-table";
import { Button } from "@/components/ui/button";

const data: Wallet[] = [
  {
    id: 1,
    name: "Wallet-1",
    description: "Wallet-1",
    address: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
    privateKey: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
  },
  {
    id: 2,
    name: "Wallet-2",
    description: "Wallet-2",
    address: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
    privateKey: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
  },
  {
    id: 3,
    name: "Wallet-3",
    description: "Wallet-3",
    address: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
    privateKey: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
  },
  {
    id: 4,
    name: "Wallet-4",
    description: "Wallet-4",
    address: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
    privateKey: "0x725158bcd6b78da6aa944dd9135edd3ba979f531",
  },
];

export const columns: ColumnDef<Wallet>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
];
export const Wallet = () => {
  return (
    <div className="flex flex-col px-6 py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight">Wallet</h2>
        <Button variant="outline">Create Wallet</Button>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
