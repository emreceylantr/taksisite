import Image from "next/image";
import MapSection from "./components/MapSection";
import Reveal from "./components/Reveal";
import MobileNav from "./components/MobileNav";

const whatsappHref =
  "https://wa.me/905550331175?text=Merhaba%20Soli%20Taksi%2C%20Mersin%20i%C3%A7in%20taksi%20talep%20etmek%20istiyorum.";

const stats = [
  ["7/24", "rezervasyon"],
  ["10 dk", "ortalama yönlendirme"],
  ["4.9", "yolcu memnuniyeti"],
];

const services = [
  {
    title: "Şehir içi ulaşım",
    text: "Günlük yolculuk, iş toplantısı ve gece dönüşü için temiz araçla planlı yönlendirme.",
  },
  {
    title: "Havalimanı transferi",
    text: "Uçuş saatinize göre hazırlanan, valizli yolculuklara uygun konforlu transfer.",
  },
  {
    title: "Kurumsal servis",
    text: "Misafir karşılama, ekip transferi ve düzenli ulaşım için takip edilebilir hizmet.",
  },
];

const standards = [
  "Temiz ve bakımlı araç",
  "Yolculuk öncesi teyit",
  "Net ve sakin iletişim",
  "Zamana göre planlama",
];

const steps = [
  "Konum ve saati iletin",
  "Servis tipi netleşsin",
  "Araç yönlendirilsin",
  "Yolculuk tamamlansın",
];

export default function Home() {
  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-zinc-950 text-white">
      <section className="relative isolate min-h-[calc(100svh+96px)] overflow-hidden lg:min-h-[92vh]">
        <Image
          src="/taxi-hero.png"
          alt="Soli Taksi aracı şehir caddesinde"
          fill
          priority
          className="object-cover object-[54%_center] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.9)_0%,rgba(9,9,11,0.54)_34%,rgba(9,9,11,0.78)_100%)] lg:bg-[linear-gradient(90deg,rgba(9,9,11,0.95)_0%,rgba(9,9,11,0.74)_46%,rgba(9,9,11,0.24)_100%)]" />

        <header className="relative z-[80] mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between gap-2 rounded border border-white/10 bg-zinc-950/62 px-3 py-2.5 backdrop-blur-md sm:gap-4 sm:px-4 sm:py-3">
            <a
              href="#"
              className="flex min-h-10 min-w-0 items-center gap-2.5 sm:min-h-11 sm:gap-3"
              aria-label="Soli Taksi ana sayfa"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-yellow-400 text-sm font-black text-zinc-950 sm:h-10 sm:w-10 sm:text-base">
                S
              </span>
              <span className="text-base font-bold leading-tight tracking-wide sm:text-lg">
                Soli Taksi
              </span>
            </a>
            <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-100 lg:flex">
              <a className="transition hover:text-yellow-300" href="#hizmetler">
                Hizmetler
              </a>
              <a className="transition hover:text-yellow-300" href="#standart">
                Standart
              </a>
              <a className="transition hover:text-yellow-300" href="#surec">
                Süreç
              </a>
              <a className="transition hover:text-yellow-300" href="#harita">
                Harita
              </a>
              <a className="transition hover:text-yellow-300" href="#iletisim">
                İletişim
              </a>
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden rounded border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-200 xl:inline-flex">
                Mersin 7/24
              </span>
              <a
                href={whatsappHref}
                className="grid min-h-10 place-items-center rounded bg-yellow-400 px-3 text-sm font-bold text-zinc-950 transition hover:bg-yellow-300 sm:min-h-11 sm:px-4"
              >
                WhatsApp
              </a>
              <MobileNav />
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-7xl items-end px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-8 sm:px-6 md:items-center lg:min-h-[calc(92vh-92px)] lg:px-8 lg:pb-16 lg:pt-10">
          <div className="w-full max-w-2xl pb-3 pt-28 sm:py-8 lg:pt-8">
            <p className="mb-3 inline-flex rounded bg-yellow-400/15 px-3 py-1 text-[11px] font-semibold text-yellow-200 ring-1 ring-yellow-300/20 sm:mb-5 sm:text-xs md:text-sm">
              Mersin için planlı ve güvenilir taksi
            </p>
            <h1 className="max-w-3xl text-[clamp(2.2rem,10vw,3.35rem)] font-black leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
              Sade, temiz ve zamanında taksi hizmeti.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-200 sm:mt-6 sm:text-base md:text-lg md:leading-8">
              Soli Taksi; şehir içi yolculuk, havalimanı transferi ve kurumsal
              ulaşım için net iletişim, temiz araç ve zamanında varış odaklı
              servis sunar.
            </p>
            <div className="mt-5 flex w-full gap-2 min-[460px]:flex-row sm:mt-7 sm:w-auto sm:gap-3">
              <a
                href={whatsappHref}
                className="flex-1 rounded bg-yellow-400 px-4 py-3.5 text-center text-sm font-bold text-zinc-950 transition hover:bg-yellow-300 sm:flex-none sm:px-6 sm:py-4 sm:text-base"
              >
                Taksi çağır
              </a>
              <a
                href="tel:+905550331175"
                className="flex-1 rounded border border-white/25 bg-white/5 px-4 py-3.5 text-center text-sm font-bold text-white transition hover:border-yellow-300 hover:text-yellow-200 sm:hidden"
              >
                Telefonla ara
              </a>
              <a
                href="#hizmetler"
                className="hidden rounded border border-white/25 bg-white/5 px-6 py-4 text-center font-bold text-white transition hover:border-yellow-300 hover:text-yellow-200 sm:inline-flex"
              >
                Hizmetleri gör
              </a>
            </div>
            <dl className="mt-8 hidden max-w-xl grid-cols-3 gap-2 sm:grid md:mt-10 md:gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded border border-white/10 bg-white/8 p-2 backdrop-blur-sm sm:p-3 md:p-4">
                  <dt className="text-base font-black text-yellow-300 sm:text-xl md:text-2xl">
                    {value}
                  </dt>
                  <dd className="mt-1 text-[8px] font-semibold uppercase leading-snug tracking-wide text-zinc-300 min-[360px]:text-[9px] sm:text-[10px] md:text-xs">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-white px-4 py-14 text-zinc-950 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
                Hizmetler
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
                Taksi ihtiyacı için net ve pratik çözümler.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-zinc-600">
              Konum, saat, valiz ve bekleme ihtiyacı önceden netleşir; yolculuk
              rastgele değil, planlı ilerler.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article
                  className="h-full rounded border border-zinc-200 bg-zinc-50 p-5 sm:p-6"
                >
                  <span className="text-sm font-black text-yellow-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-600">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="standart" className="bg-zinc-100 px-4 py-14 text-zinc-950 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
              Soli standardı
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
              Yolculuk öncesinden varışa kadar özenli hizmet.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              Soli Taksi, temiz araç, net iletişim ve zaman planlamasıyla
              yolculuğunuzu daha konforlu ve güvenilir hale getirir.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {standards.map((item, index) => (
              <Reveal key={item} delay={index * 0.07}>
                <div className="rounded border border-zinc-200 bg-white p-5">
                  <span className="mb-4 block h-1 w-9 rounded bg-yellow-400" />
                  <p className="font-bold">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="bg-white px-4 py-14 text-zinc-950 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
            Süreç
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            Yolculuk talebi sade ilerler.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="rounded border border-zinc-200 bg-zinc-50 p-6">
                  <span className="grid h-10 w-10 place-items-center rounded bg-yellow-400 text-sm font-black text-zinc-950">
                    {index + 1}
                  </span>
                  <p className="mt-5 font-bold">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      <section id="iletisim" className="bg-yellow-400 px-4 py-14 text-zinc-950 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide">İletişim</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
              Soli Taksi ile yola çıkın.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
              Konumunuzu, varış noktanızı ve yolculuk saatinizi iletin; size
              uygun yönlendirmeyi yapalım.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="rounded bg-zinc-950 px-6 py-4 text-center font-bold text-white transition hover:bg-zinc-800"
            >
              WhatsApp&apos;tan yaz
            </a>
            <a
              href="tel:+905550331175"
              className="rounded border border-zinc-950 px-6 py-4 text-center font-bold transition hover:bg-zinc-950 hover:text-white"
            >
              Telefonla ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
