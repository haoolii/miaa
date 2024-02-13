import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Outlet, NavLink } from "react-router-dom";
import { cn } from "./lib/utils";

const menus = [
  {
    key: "Wallet",
    label: "Wallet",
    to: "wallet",
  },
  {
    key: "Network",
    label: "Network",
    to: "network",
  },
  {
    key: "Task",
    label: "Task",
    to: "task",
  },
];

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-full">
        <div className="flex flex-col h-full">
          <div className="border-b py-4 px-6">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Miaa Dashboard
            </h1>
          </div>
          <div className="h-full flex">
            <div className="w-48 border-r h-full flex flex-col">
              {menus.map((menu) => (
                <NavLink
                  key={menu.key}
                  className={({ isActive, isPending }) =>
                    cn(
                      ["w-full border-b px-6 py-3 inline-block"],
                      isActive ? "bg-primary-foreground" : ""
                    )
                  }
                  to={menu.to}
                >
                  {menu.label}
                </NavLink>
              ))}
            </div>
            <div className="h-full flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
