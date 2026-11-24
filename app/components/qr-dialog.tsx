"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCallback, useRef, type ReactNode } from "react";
import { CONTACT } from "@/lib/data";

type QRDialogProps = {
  /** Contents of the trigger button. */
  children: ReactNode;
  triggerClassName?: string;
};

/** Native dialog — keyboard, backdrop dismissal, and focus trap come free. */
export function QRDialog({ children, triggerClassName }: QRDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => ref.current?.showModal(), []);
  const close = useCallback(() => ref.current?.close(), []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Show Viber QR code"
        className={triggerClassName}
      >
        {children}
      </button>
      <dialog
        ref={ref}
        aria-labelledby="qr-dialog-title"
        onClick={(event) => {
          // Clicks land on the dialog element itself only outside the panel.
          if (event.target === event.currentTarget) close();
        }}
        className="m-auto rounded-2xl border border-line bg-surface p-0 text-ink shadow-pop backdrop:bg-black/50"
      >
        <div className="relative w-[min(20rem,88vw)] p-6">
          <div className="mb-5 flex items-start justify-between gap-6">
            <div>
              <h2 id="qr-dialog-title" className="text-lg font-semibold tracking-tight text-ink">
                Viber
              </h2>
              <p className="mt-0.5 text-sm text-ink-3">Scan to chat</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-m-2 flex size-9 items-center justify-center rounded-lg text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="rounded-xl border border-line bg-white p-4">
            <Image
              src="/viber-qr.svg"
              alt="Viber QR code for James Verceluz"
              width={240}
              height={240}
              className="mx-auto h-auto w-full max-w-52"
            />
          </div>

          <p className="mt-4 text-center text-sm text-ink-3">
            Open Viber, then scan
          </p>
          <a
            href={CONTACT.viber}
            className="mt-4 flex h-10 items-center justify-center rounded-lg border border-line-strong text-sm font-medium text-ink transition-colors hover:bg-surface-2"
          >
            On this phone? Open in Viber
          </a>
        </div>
      </dialog>
    </>
  );
}
