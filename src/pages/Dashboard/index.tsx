import { useState, useEffect } from 'react';
import { Carrosel } from "../../components/carrosel/carrosel";
import { Product } from "../../components/modal";
import { api } from "../../service/http";

function DashBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/products/list')
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.error('Erro de rede: ', e.message);
        console.error('Detalhes do erro:', e);
      });
  }, []);

  return (
    <main className="flex flex-col h-20 mx-auto w-[90%] gap-8">
      <section className="w-full">
        <Carrosel />
      </section>
      <h2 className="text-2xl font-extrabold text-gray-700">Mais vendidos</h2>
      <section className="flex">
        {data?.map((info) => (
          <Product info={info} key={info.id} />
        ))}
      </section>
    </main>
  );
}

export { DashBoard };
