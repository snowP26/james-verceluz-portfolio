"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCallback, useRef, type ReactNode } from "react";

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
        className="m-auto border border-rule bg-paper-raised p-0 text-ink backdrop:bg-ink/45 backdrop:backdrop-blur-sm"
      >
        <div className="plate relative w-[min(20rem,88vw)] p-6">
          <div className="mb-5 flex items-start justify-between gap-6">
            <div>
              <p className="annot-sm text-ink-3">Scan to chat</p>
              <h2 id="qr-dialog-title" className="display-sm mt-1.5 text-ink">
                Viber
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-m-1.5 p-1.5 text-ink-3 transition-colors hover:text-ink"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="border border-rule bg-white p-4">
            <Image
              src="/viber-qr.svg"
              alt="Viber QR code for James Verceluz"
              width={240}
              height={240}
              className="mx-auto h-auto w-full max-w-52"
            />
          </div>

          <p className="annot-sm mt-5 text-center text-ink-3">
            Open Viber → scan
          </p>
        </div>
      </dialog>
    </>
  );
}
