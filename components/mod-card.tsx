"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Mod } from "@/app/data/mods";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function ModCard({ mod }: { mod: Mod }) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className={cn(
        "border-2 transition-all duration-200 overflow-hidden gap-0 py-0",
        open
          ? "border-[var(--color-mc-grass)] shadow-lg shadow-[var(--color-mc-grass)]/20"
          : "border-border hover:border-[var(--color-mc-grass)]/60"
      )}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          className="w-full text-left px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-accent/40 transition-colors bg-transparent border-0"
        >
            <span className="text-4xl shrink-0" aria-hidden>
              {mod.emoji}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl leading-none text-[var(--color-mc-gold)]">
                  {mod.name}
                </h3>
                {mod.version && (
                  <Badge variant="outline" className="text-[10px] font-mono">
                    v{mod.version.split(" ")[0]}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {mod.shortDescription}
              </p>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                open && "rotate-180"
              )}
            />
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="px-5 pb-5 pt-1 space-y-4 border-t border-border/60">
            <p className="text-base leading-relaxed pt-4">
              {mod.fullDescription}
            </p>

            {mod.hotkeys && mod.hotkeys.length > 0 && (
              <div>
                <h4 className="font-[family-name:var(--font-heading)] text-xl text-[var(--color-mc-diamond)] mb-2">
                  Гарячі клавіші
                </h4>
                <ul className="space-y-1.5">
                  {mod.hotkeys.map((hk) => (
                    <li key={hk.key} className="flex items-start gap-3 text-sm">
                      <kbd className="px-2 py-0.5 rounded border border-border bg-muted/60 font-mono text-xs shrink-0 min-w-16 text-center">
                        {hk.key}
                      </kbd>
                      <span className="text-muted-foreground">
                        {hk.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href={mod.officialUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-mc-grass)] text-white text-sm font-medium hover:bg-[var(--color-mc-emerald)] transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              {mod.officialLabel}
            </Link>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
