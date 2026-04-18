import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Kodomandry",
  description:
    "Privacy policy for Kodomandry Minecraft Installer and kodomandry-minecraft.vercel.app site.",
};

const LAST_UPDATED = "2026-04-18";

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="max-w-3xl mx-auto px-5 py-12 md:py-16">
        <Link
          href="/"
          className="inline-block text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          ← На головну
        </Link>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl leading-none text-[var(--color-mc-gold)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Останнє оновлення: {LAST_UPDATED}
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-mc-diamond)]">
              Коротко
            </h2>
            <p>
              <strong>Kodomandry Installer</strong> і цей сайт{" "}
              <code className="font-mono text-sm">kodomandry-minecraft.vercel.app</code>{" "}
              не збирають жодних персональних даних, не мають телеметрії,
              аналітики чи cookies. Усе, що запитує інсталятор —
              це нікнейм Minecraft, який зберігається{" "}
              <strong>виключно локально</strong> на комп&apos;ютері користувача.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-mc-diamond)]">
              Що робить інсталятор
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Завантажує <strong>Prism Launcher</strong> (offline-режим) з
                GitHub Releases
              </li>
              <li>
                Завантажує <strong>Temurin JRE 21</strong> з api.adoptium.net
              </li>
              <li>
                Завантажує модпак <code>kodomandy-server2.mrpack</code> з GitHub
                Releases і моди з <strong>Modrinth CDN</strong>
              </li>
              <li>
                Створює конфіг Prism Launcher у теці користувача (
                <code>%LOCALAPPDATA%\Kodomandry\</code> на Windows або{" "}
                <code>~/Library/Application Support/Kodomandry/</code> на macOS)
              </li>
              <li>
                Запитує нікнейм гравця та створює з нього локальний offline-акаунт
                Minecraft
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-mc-diamond)]">
              Які дані обробляються
            </h2>
            <div className="rounded-lg border border-border/60 bg-card/40 p-4">
              <p className="font-semibold mb-2">Нікнейм Minecraft</p>
              <p className="text-sm text-muted-foreground">
                Зберігається локально у файлі <code>accounts.json</code> Prism
                Launcher. <strong>Не відправляється</strong> на жодні сервери
                авторів інсталятора. Використовується лише Minecraft-клієнтом
                для з&apos;єднання з ігровим сервером.
              </p>
            </div>
            <p>
              Інсталятор <strong>не</strong> збирає: IP-адреси, email, телефон,
              геолокацію, список файлів, апаратні ідентифікатори, історію
              використання чи будь-які інші персональні дані.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-mc-diamond)]">
              Сторонні сервіси
            </h2>
            <p>
              Під час встановлення інсталятор робить HTTP-запити до цих публічних
              сервісів (стандартні GET-запити для завантаження файлів):
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <code>github.com</code> / <code>objects.githubusercontent.com</code>{" "}
                — завантаження Prism Launcher і модпаку
              </li>
              <li>
                <code>api.adoptium.net</code> — завантаження Java 21
              </li>
              <li>
                <code>cdn.modrinth.com</code> — завантаження модів
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Ці сервіси можуть логувати IP-адреси завантажень згідно власних
              політик. Автори Kodomandry не мають доступу до цих логів.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-mc-diamond)]">
              Minecraft-сервер
            </h2>
            <p>
              Після встановлення користувач може під&apos;єднатися до
              Minecraft-сервера <code>46.225.227.42:25566</code>. Під час гри
              сервер зберігає стандартні дані Minecraft: нікнейм, IP-адресу
              з&apos;єднання, прогрес гри, побудовані об&apos;єкти, чат.
              Ці дані використовуються виключно для функціонування гри і не
              передаються третім особам.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-mc-diamond)]">
              Сайт (kodomandry-minecraft.vercel.app)
            </h2>
            <p>
              Сайт статичний, без аналітики, без cookies, без форм. Хостинг
              Vercel може логувати IP-адреси відвідувачів згідно{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-mc-diamond)] underline"
              >
                Vercel Privacy Policy
              </a>
              . Автори сайту не мають доступу до цих логів.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-mc-diamond)]">
              Контакт
            </h2>
            <p>
              Питання щодо цієї політики —{" "}
              <a
                href="mailto:a.semelinsky@gmail.com"
                className="text-[var(--color-mc-diamond)] underline"
              >
                a.semelinsky@gmail.com
              </a>{" "}
              або issue на{" "}
              <a
                href="https://github.com/asemelinsky/kodomandry-installer/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-mc-diamond)] underline"
              >
                GitHub
              </a>
              .
            </p>
          </section>

          <section className="space-y-3 pt-8 border-t border-border/40">
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-muted-foreground">
              English summary
            </h2>
            <p className="text-sm text-muted-foreground">
              The Kodomandry Installer collects no personal data, has no
              telemetry, analytics, or cookies. The only user input — a
              Minecraft nickname — is stored locally on the user&apos;s machine
              in the Prism Launcher config and is never transmitted to the
              authors. The installer downloads Prism Launcher, Temurin Java 21,
              and the Kodomandry modpack from public services (GitHub, Adoptium,
              Modrinth). These third parties may log download IPs under their
              own policies. Contact:{" "}
              <a
                href="mailto:a.semelinsky@gmail.com"
                className="underline"
              >
                a.semelinsky@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
