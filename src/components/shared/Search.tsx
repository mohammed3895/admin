"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { PROJECTS } from "~/constants/projects";
import SearchList from "./SearchList";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "~/lib/utils";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchField, setSearchField] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    return project.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchField(e.target.value.toString().toLowerCase());
  };

  function list() {
    return (
      <ScrollArea
        className={cn("flex h-72 flex-col gap-2", {
          hidden: searchField === "",
        })}
      >
        <div className="flex h-full w-full flex-col gap-3">
          <SearchList filteredProjects={filteredProjects} />
        </div>
      </ScrollArea>
    );
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setSearchField("");
      }}
    >
      <DialogTrigger>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-muted-foreground md:bg-background"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="h-fit w-[70%] rounded-md border-none bg-transparent p-0 outline-none">
        <>
          <Input
            type="text"
            id="query"
            placeholder="Search for project ..."
            className="relative flex h-12 w-full items-center justify-start rounded-md border-none bg-background px-4"
            onChange={handleChange}
          />

          {list()}
        </>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
