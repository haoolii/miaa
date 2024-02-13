import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type Network = {
  id: number;
  network: string;
  rpcUrl: string;
  chainId: string;
  currencySymbol: string;
  blockExplorerURL: string;
};
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../shared/components/data-table";
import { Button } from "@/components/ui/button";

const data: Network[] = [
  {
    id: 1,
    network: "Berachain Artio",
    rpcUrl: "https://artio.rpc.berachain.com/",
    chainId: "80085",
    currencySymbol: "BERA",
    blockExplorerURL: "https://artio.beratrail.io/",
  },
  {
    id: 2,
    network: "Berachain Artio - 2",
    rpcUrl: "https://artio.rpc.berachain.com/",
    chainId: "80085",
    currencySymbol: "BERA",
    blockExplorerURL: "https://artio.beratrail.io/",
  },
];

export const columns: ColumnDef<Network>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "network",
    header: "Network",
  },
  {
    accessorKey: "rpcUrl",
    header: "RPC URL",
  },
  {
    accessorKey: "chainId",
    header: "Chain ID",
  },
  {
    accessorKey: "currencySymbol",
    header: "Symbol",
  },
  {
    accessorKey: "blockExplorerURL",
    header: "Explorer URL",
  },
];
export const Network = () => {
  return (
    <div className="flex flex-col px-6 py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Network
        </h2>
        <Button variant="outline">Create Network</Button>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
