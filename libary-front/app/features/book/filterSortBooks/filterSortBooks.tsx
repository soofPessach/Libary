import { Badge, Select } from "@radix-ui/themes";
import React, { useState } from "react";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import type { Book } from "~/mockData/Book";
import { isBookAvailableForUser } from "~/Services/user";
import { FilterBy, SortBy, type Filter } from "./filterSortBooksLogic";

interface filterSortBooksProps {
  filters: Filter[];
  setFilters: (books: Filter[]) => void;
  sortBy: SortBy;
  setSortBy: (sortBy: SortBy) => void;
}
function FilterSortBooks(props: filterSortBooksProps) {
  const [onlyAvailableBooks, setOnlyAvailableBooks] = useState(false);
  const onOnlyAvailableClicked = () => {
    setOnlyAvailableBooks(!onlyAvailableBooks);

    props.setFilters(
      !onlyAvailableBooks
        ? [...props.filters, { filterBy: FilterBy.availability, value: true }]
        : [
            ...props.filters.filter(
              (filter) => filter.filterBy !== FilterBy.availability,
            ),
          ],
    );
  };

  const onSortClicked = (newValue: string) => {
    props.setSortBy(newValue as SortBy);
  };
  return (
    <div className="flex gap-3">
      <Badge
        variant={`${onlyAvailableBooks ? "solid" : "outline"}`}
        onClick={(e) => onOnlyAvailableClicked()}
        className="cursor-pointer"
      >
        only available
      </Badge>
      <Select.Root
        value={props.sortBy}
        onValueChange={(newValue) => onSortClicked(newValue)}
      >
        <Select.Trigger variant="ghost" />
        <Select.Content>
          <Select.Item value={SortBy.sortBy}>sort By</Select.Item>
          <Select.Item value={SortBy.uploadLast}>upload last</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export default FilterSortBooks;
