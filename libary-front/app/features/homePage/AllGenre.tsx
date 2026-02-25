import { Button, Flex, ScrollArea } from "@radix-ui/themes";
import React from "react";
import { redirect, useNavigate } from "react-router";
import { genres, type Genre } from "~/mockData/Genre";

function AllGenre() {
  let navigate = useNavigate();

  const onBadgeClick = (genre: Genre) => {
    navigate(`/genre/${genre.name}`);
  };
  return (
    <div>
      <ScrollArea type="always" scrollbars="horizontal" style={{ height: 60 }}>
        <Flex className="gap-2" style={{ width: genres.length * 120 }}>
          {genres
            .sort((a, b) => Number(b.isMainGenre) - Number(a.isMainGenre))
            .map((genre) => (
              <Button
                onClick={(e) => {
                  onBadgeClick(genre);
                }}
                key={genre.name}
                radius="full"
                size="2"
                variant={genre.isMainGenre ? "solid" : "outline"}
              >
                {genre.name}
              </Button>
            ))}
        </Flex>
      </ScrollArea>
    </div>
  );
}

export default AllGenre;
