import type { ReactNode } from "react";
import Link from "next/link";
import { educationalMods, funMods } from "./data/mods";
import { ModCard } from "@/components/mod-card";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-[var(--color-mc-grass)]/40">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-mc-grass) 0%, transparent 40%), linear-gradient(-135deg, var(--color-mc-diamond) 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="inline-block px-3 py-1 rounded bg-[var(--color-mc-grass)]/20 border border-[var(--color-mc-grass)]/40 text-[var(--color-mc-grass)] text-xs font-mono mb-6">
            NeoForge 1.21.1 · Minecraft сервер
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-none text-[var(--color-mc-gold)] mb-6">
            Ласкаво просимо на <br />
            <span className="text-[var(--color-mc-grass)]">Kodomandry! 🎮</span>
          </h1>

          <div className="space-y-4 text-lg md:text-xl text-foreground/90 max-w-3xl">
            <p>
              Це не просто Minecraft сервер — це таємна лабораторія{" "}
              <span className="text-[var(--color-mc-diamond)] font-semibold">
                кодомандрів
              </span>{" "}
              (якщо ти це читаєш — вітаємо, ти вже один з нас).
            </p>
            <p>
              Тут ти не просто будуєш будинки з кубиків — ти програмуєш роботів,
              запускаєш фабрики, підриваєш редстоун-реактори і, звісно, рятуєш
              світ від скелетів. Все як у справжніх айтішників, тільки з киркою.
              ⛏️
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-3xl">
            <HeroBullet
              icon="🤖"
              text="Пишеш Lua-код для комп'ютерів — твої боти копають, сортують, воюють"
            />
            <HeroBullet
              icon="⚙️"
              text="Будуєш заводи з шестерень і стрічок — як справжній інженер"
            />
            <HeroBullet
              icon="💡"
              text="Клацаєш редстоуном — логічні схеми як у процесорі"
            />
            <HeroBullet
              icon="🐉"
              text="Досліджуєш виміри, приручаєш драконів, ловиш покемонів"
            />
          </div>

          <p className="mt-10 text-xl md:text-2xl font-[family-name:var(--font-heading)] text-[var(--color-mc-gold)]">
            Готовий? Хапай кирку — і погнали! ⛏️
          </p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section
        id="download"
        className="max-w-5xl mx-auto px-5 py-12 md:py-16"
      >
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl leading-none mb-2 text-[var(--color-mc-gold)]">
            📥 Скачати, Навчатись, Грати
          </h2>
          <p className="text-muted-foreground">
            Один клік — і в тебе вже є лаунчер, Java, модпак і сервер у списку
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DownloadCard
            os="Windows 10 / 11"
            emoji="🪟"
            href="https://github.com/asemelinsky/kodomandry-installer/releases/latest/download/KodomandryInstaller.exe"
            primary
            hint="Подвійний клік. Якщо SmartScreen — More info → Run anyway"
          />
          <DownloadCard
            os="macOS"
            emoji="🍎"
            href="https://github.com/asemelinsky/kodomandry-installer/releases/latest/download/install.command"
            hint="Правий клік на install.command → Відкрити"
            details={
              <>
                <p className="font-semibold text-foreground/90">
                  ⚠️ macOS заблокує файл при першому запуску — це нормально
                </p>
                <ol className="mt-2 space-y-1.5 list-decimal list-inside">
                  <li>
                    З&apos;явиться вікно <em>&quot;install.command не
                    відкрито&quot;</em> — натисни <strong>Готово</strong>
                  </li>
                  <li>
                    Відкрий <strong>Системні налаштування → Конфіденційність
                    і безпека</strong>
                  </li>
                  <li>
                    Прокрути вниз до секції <strong>Безпека</strong>
                  </li>
                  <li>
                    Побачиш <em>&quot;install.command заблоковано…&quot;</em>
                    {" "}— натисни <strong>Все одно відкрити</strong>{" "}
                    <span className="text-muted-foreground">
                      (Open Anyway / Dennoch öffnen)
                    </span>
                  </li>
                  <li>Введи пароль Mac якщо попросить</li>
                  <li>
                    У діалозі що з&apos;явиться —{" "}
                    <strong>Відкрити</strong>
                  </li>
                </ol>
                <p className="mt-3 text-muted-foreground">
                  Після цього відкриється Terminal і піде установка. Запитає
                  нікнейм — введи свій (3-16 символів, латиниця).
                </p>
              </>
            }
          />
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Сервер: <code className="font-mono">46.225.227.42:25566</code> · Minecraft 1.21.1 · NeoForge
        </p>
      </section>

      <ModSection
        id="educational"
        title="📚 Навчальні моди"
        subtitle="Програмування, інженерія, логіка — те, що прокачує мозок"
        accentVar="--color-mc-diamond"
        mods={educationalMods}
      />

      <ModSection
        id="fun"
        title="🎭 Розважальні моди"
        subtitle="Пригоди, істоти, декор — те, що робить гру живою"
        accentVar="--color-mc-redstone"
        mods={funMods}
      />

      <footer className="border-t border-border mt-16 py-8 text-center text-sm text-muted-foreground">
        <p>Kodomandry · Minecraft сервер для юних айтішників · NeoForge 1.21.1</p>
        <p className="mt-2 text-xs">
          Довідник оновлюється разом із сервером. Знайшов помилку або мод не
          описаний? Напиши вчителю!
        </p>
        <p className="mt-3 text-xs">
          <Link href="/privacy" className="hover:text-foreground underline">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </main>
  );
}

function DownloadCard({
  os,
  emoji,
  href,
  hint,
  primary,
  disabled,
  details,
}: {
  os: string;
  emoji: string;
  href?: string;
  hint: string;
  primary?: boolean;
  disabled?: boolean;
  details?: ReactNode;
}) {
  const wrapperClasses =
    "rounded-lg border-2 transition-all overflow-hidden " +
    (disabled
      ? "border-border bg-card/40 opacity-60"
      : primary
        ? "border-[var(--color-mc-grass)] bg-[var(--color-mc-grass)]/10"
        : "border-border hover:border-[var(--color-mc-grass)]/60");

  const rowClasses =
    "flex items-center gap-4 p-5 " +
    (disabled
      ? "cursor-not-allowed"
      : primary
        ? "hover:bg-[var(--color-mc-grass)]/10"
        : "");

  const content = (
    <>
      <span className="text-5xl shrink-0" aria-hidden>
        {emoji}
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-[family-name:var(--font-heading)] text-2xl leading-none text-[var(--color-mc-gold)]">
          {os}
        </div>
        <div className="text-sm text-muted-foreground mt-1">{hint}</div>
      </div>
      {!disabled && (
        <span className="text-2xl shrink-0" aria-hidden>
          ⬇
        </span>
      )}
    </>
  );

  const row =
    disabled || !href ? (
      <div className={rowClasses}>{content}</div>
    ) : (
      <a href={href} className={rowClasses}>
        {content}
      </a>
    );

  return (
    <div className={wrapperClasses}>
      {row}
      {details && (
        <details className="group border-t border-border/60">
          <summary className="cursor-pointer select-none px-5 py-3 text-sm text-muted-foreground hover:text-foreground flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
            <span>📖 Як дозволити запуск на macOS</span>
            <span className="text-xs transition-transform group-open:rotate-180" aria-hidden>
              ▼
            </span>
          </summary>
          <div className="px-5 pb-5 pt-1 text-sm leading-relaxed">
            {details}
          </div>
        </details>
      )}
    </div>
  );
}

function HeroBullet({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-card/60 border border-border backdrop-blur-sm">
      <span className="text-2xl shrink-0" aria-hidden>
        {icon}
      </span>
      <span className="text-sm leading-relaxed">{text}</span>
    </div>
  );
}

function ModSection({
  id,
  title,
  subtitle,
  accentVar,
  mods,
}: {
  id: string;
  title: string;
  subtitle: string;
  accentVar: string;
  mods: typeof educationalMods;
}) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-5 py-12 md:py-16">
      <div className="mb-8">
        <h2
          className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl leading-none mb-2"
          style={{ color: `var(${accentVar})` }}
        >
          {title}
        </h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mods.map((mod) => (
          <ModCard key={mod.id} mod={mod} />
        ))}
      </div>
    </section>
  );
}
