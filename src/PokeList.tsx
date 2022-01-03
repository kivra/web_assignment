import { useEffect, useState } from "react";
import { PokeCard } from "./PokeCard";

interface Poke {
  image: string;
  name: string;
  info: string;
  favorite: boolean;
}

// Kod kvalite, hur skriver kandidater kod

/**
 * 0. Bekanta dig med koden, du kan göra vilka ändringar du vill i `src`. Förbättra gärna kodstandarden och eventuella style fixar som du kan tänka på. Följande url:er finns att tillgå. 
 * 1. Det verkar som att applikationen inte fungerar. Det går inte att lägga till/ta bort favoriter. Kan du fixa det?
 * 2. Lägg till en knapp för att enbart visa favoriter.
 * 3. Om du klickar snabb på knappen för att lägga till en pokemon som favorit. Fungerar det? Om inte, kan vi fixa det?
 */

export function PokeList() {
  const [pokeList, setPokeList] = useState<Poke[]>([]);

  useEffect(() => {
    fetch("/all")
      .then((result) => result.json())
      .then((l) => setPokeList(l));
  }, []);

  const addToFavorite = async (name: string) => {
    const result = await fetch(`/favorite/${name}`, {
      method: "post",
    });
    if (!result.ok) {
      throw new Error("No!");
    }
    fetch("/all")
      .then((result) => result.json())
      .then((l) => setPokeList(l));
  };

  const removeFromFavorite = (poke: Poke) => {
    fetch(`/favorite/${poke.name}`, {
      method: "delete",
    }).then(() => {
      return fetch("/all")
        .then((result) => result.json())
        .then((l) => setPokeList(l));
    });
  };

  return (
    <>
      {pokeList.map((j) => (
        <PokeCard
          key={j.name}
          {...j}
          onAddToFavorite={() => {
            if (j.favorite) {
              addToFavorite(j.name);
            } else {
              removeFromFavorite(j);
            }
          }}
        />
      ))}
    </>
  );
}
