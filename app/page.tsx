"use client";

import { categories } from "@/data/categories";
import "./page.css";
import { useState } from "react";

export type Info = {
  kategorinavn: string;
  elementnavn: string;
  elementsymbol: string;
};

export default function Home() {

  const [info, setInfo] = useState<Info | null>(null);

  return (
    <main>
      <section className="ps">

        {
          categories.map(category => (
            <div key={category.name} className="sub">
              {
                category.elements.map(element => (
                  <span
                    tabIndex={element.atomic_number}
                    onFocus={() => {
                      setInfo({
                        kategorinavn: category.name,
                        elementnavn: element.name,
                        elementsymbol: element.symbol,
                      })
                    }}
                    key={element.name}
                    style={{
                      gridColumn: element.group,
                      gridRow: element.period,
                      backgroundColor: category.color,
                    }}
                  >
                    {element.symbol}
                  </span>
                ))
              }
            </div>
          ))
        }

        {
          info !== null &&
          <div className="sub info">
            <div>
              <h1>{info.elementnavn}</h1>
              <p>Kategori: {info.kategorinavn}</p>
              <p>Kjemisk symbol: {info.elementsymbol}</p>
            </div>
          </div>
        }

      </section>
    </main >
  );
}
