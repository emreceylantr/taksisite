"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const ServiceMap = dynamic(() => import("./ServiceMap"), {
  ssr: false,
});

export default function MapSection() {
  return (
    <section id="harita" className="bg-zinc-100 px-5 py-20 text-zinc-950 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
            Konum
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal">
            Soli Taksi konumu Mersin içinde kolayca ulaşılabilir.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            Mersin genelindeki şehir içi yolculuk ve transfer talepleri için
            konumumuzu harita üzerinden görüntüleyebilirsiniz.
          </p>
          <a
            href="https://share.google/zeye0xjX7VL39v3f8"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded bg-zinc-950 px-5 py-3 font-bold text-white transition hover:bg-zinc-800"
          >
            Google Haritalar&apos;da aç
          </a>
        </div>
        <Reveal>
          <ServiceMap />
        </Reveal>
      </div>
    </section>
  );
}
