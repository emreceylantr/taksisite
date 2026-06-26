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
    <main className="min-h-[100dvh] bg-zinc-950 text-white">
      <section className="relative isolate min-h-[92dvh] overflow-hidden sm:min-h-[92vh]">
        <Image
          src="/taxi-hero.png"
          alt="Soli Taksi aracı şehir caddesinde"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.94)_0%,rgba(9,9,11,0.76)_44%,rgba(9,9,11,0.3)_100%)]" />

        <header className="relative z-10 mx-auto w-full max-w-7xl px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-3 rounded border border-white/10 bg-zinc-950/45 px-4 py-3 backdrop-blur-md sm:gap-4">
            <a
              href="#"
              className="flex min-h-11 min-w-0 items-center gap-3"
              aria-label="Soli Taksi ana sayfa"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-yellow-400 font-black text-zinc-950">
                S
              </span>
              <span className="text-base font-bold leading-tight tracking-wide min-[360px]:text-lg">
                Soli Taksi
              </span>
            </a>
            <MobileNav />
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
            <div className="flex items-center gap-3">
              <span className="hidden rounded border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-200 xl:inline-flex">
                Mersin 7/24
              </span>
              <a
                href={whatsappHref}
                className="grid min-h-11 place-items-center rounded bg-yellow-400 px-4 text-sm font-bold text-zinc-950 transition hover:bg-yellow-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(92svh-92px)] w-full max-w-7xl items-center px-5 pb-16 pt-10 sm:min-h-[calc(92vh-92px)] sm:px-8">
          <div className="max-w-2xl rounded border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:p-8">
            <p className="mb-5 inline-flex rounded bg-yellow-400/15 px-3 py-1 text-xs font-semibold text-yellow-200 md:text-sm">
              Mersin için planlı ve güvenilir taksi
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.1] tracking-normal md:text-7xl">
              Sade, temiz ve zamanında taksi hizmeti.<br className="hidden md:block" />
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-8 text-zinc-200 md:text-lg">
              Soli Taksi; şehir içi yolculuk, havalimanı transferi ve kurumsal
              ulaşım için net iletişim, temiz araç ve zamanında varış odaklı
              servis sunar.
            </p>
            <div className="mt-8 flex flex-col w-full gap-3 sm:flex-row sm:w-auto">
              <a
                href={whatsappHref}
                className="rounded bg-yellow-400 px-6 py-4 text-center font-bold text-zinc-950 transition hover:bg-yellow-300 w-full sm:w-auto"
              >
                Taksi çağır
              </a>
              <a
                href="#hizmetler"
                className="rounded border border-white/25 bg-white/5 px-6 py-4 text-center font-bold text-white transition hover:border-yellow-300 hover:text-yellow-200 w-full sm:w-auto"
              >
                Hizmetleri gör
              </a>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-2 md:gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="border-l border-yellow-300/70 pl-3 md:pl-4">
                  <dt className="text-lg font-black text-yellow-300 md:text-2xl">
                    {value}
                  </dt>
                  <dd className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-300 md:text-xs">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-white px-5 py-20 text-zinc-950 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
                Hizmetler
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-normal">
                Taksi ihtiyacı için net ve pratik çözümler.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-zinc-600">
              Konum, saat, valiz ve bekleme ihtiyacı önceden netleşir; yolculuk
              rastgele değil, planlı ilerler.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article
                  className="rounded border border-zinc-200 bg-zinc-50 p-6"
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

      <section id="standart" className="bg-zinc-100 px-5 py-20 text-zinc-950 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
              Soli standardı
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">
              Yolculuk öncesinden varışa kadar özenli hizmet.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
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

      <section id="surec" className="bg-white px-5 py-20 text-zinc-950 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
            Süreç
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-normal">
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

      <section id="iletisim" className="bg-yellow-400 px-5 py-16 text-zinc-950 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide">İletişim</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">
              Soli Taksi ile yola çıkın.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8">
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
