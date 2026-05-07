"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

/**
 * Renderiza o contêiner global de notificações (toasts) da aplicação.
 *
 * Deve ser montado uma única vez no layout raiz (`app/layout.tsx`), tipicamente
 * como irmão de `{children}`, para que chamadas a `useToast()` / `toast()` em
 * qualquer página exibam mensagens visíveis ao usuário.
 *
 * **Argumentos:** este componente não recebe props.
 *
 * **Retorno:** JSX com `ToastProvider`, lista de `Toast` ativos e área (`ToastViewport`).
 */
export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title != null ? <ToastTitle>{title}</ToastTitle> : null}
            {description != null ? (
              <ToastDescription>{description}</ToastDescription>
            ) : null}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}
