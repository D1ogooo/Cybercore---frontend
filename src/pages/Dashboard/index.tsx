import { useState, useEffect } from 'react';
import { Carrosel } from "../../components/carrosel/carrosel";
import { Product } from "../../components/modal";
import { api } from "../../service/http";

function DashBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/products/list')
      .then((res) => {
        console.log(res.data);
        setData(res.data.publicItens);
      })
      .catch((e) => {
        console.error('Erro de rede: ', e.message);
        console.error('Detalhes do erro:', e);
        setData([]);
      });
  }, []);

  return (
    <main className="flex flex-col mx-auto w-[90%] gap-8 py-10">
      <section className="w-full mb-5">
        <Carrosel />
      </section>
      <h2 className="text-2xl font-extrabold text-gray-700">Mais vendidos</h2>
      <section className="flex flex-wrap justify-start">
        {data.map((info) => (
          <Product info={info} key={info.id} />
        ))}cmd
      </section>
    </main>
  );
}

export { DashBoard };
