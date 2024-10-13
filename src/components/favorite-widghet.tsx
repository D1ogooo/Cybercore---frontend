import { useState, useEffect } from 'react';
import { api } from '../service/http';
import type { CartWidgetType } from "../@types/types";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { LucideHeart } from "lucide-react";
import { FavoriteItems } from "./favoriteitems";

export function Favorite({ width = 2, height = 2, ...rest }: CartWidgetType) {
  const [data, setData] = useState([]);

  useEffect(() => {
   api.get('/favorites/list')
    .then((res) => {
      setData(res.data.favorites.map((favorite) => favorite.product))
     })
    .catch((e) => {
     console.error('Erro de rede: ', e.message);
     console.error('Detalhes do erro:', e);
    });
  }, []);

  return (
    <Menu>
      <MenuButton px={4} py={2} transition="all 0.2s" borderRadius="md">
        <LucideHeart {...rest} width={width} height={height} />
      </MenuButton>
      <MenuList className="w-[28rem] h-[30rem] overflow-y-auto">
      {data.length === 0 ? (
       <div className="p-4">Nenhum item favoritado.</div>
      ) : (data.map((product) => (
          <FavoriteItems
            key={product.id}
            info={product.sobre}
            preco={product.preco}
            image={product.imagem}
          />
        ))
      )}
        <div className="flex items-center justify-between pl-4 pr-4 pb-1 pt-4" />
      </MenuList>
    </Menu>
  );
}
