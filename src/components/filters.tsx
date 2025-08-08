"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProjectType } from "@/types";

interface FiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: ProjectType | "all";
  onTypeChange: (type: ProjectType | "all") => void;
  sortBy: "newest" | "impact" | "complexity";
  onSortChange: (sort: "newest" | "impact" | "complexity") => void;
}

export function Filters({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  sortBy,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search projects by title or technology..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Project Type Filter */}
        <Tabs
          value={selectedType}
          onValueChange={(value) => onTypeChange(value as ProjectType | "all")}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid w-full grid-cols-4 sm:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Apps</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="motion">Motion</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Sort */}
        <Select value={sortBy} onValueChange={(value) => onSortChange(value as typeof sortBy)}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="impact">Impact</SelectItem>
            <SelectItem value="complexity">Complexity</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
