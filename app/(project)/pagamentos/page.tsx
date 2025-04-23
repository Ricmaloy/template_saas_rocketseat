'use client'

import { useStripe } from '@/app/hooks/useStripe'

export default function Pagamentos() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe()

  return (
    <div className="flex flex-col justify-center gap-12 items-center h-screen">
      <h1>Pagamentos</h1>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => createPaymentStripeCheckout({ testeId: `123` })}
          className="border rounded-md px-1"
        >
          Criar Pagamento Stripe
        </button>
        <button
          onClick={() => createSubscriptionStripeCheckout({ testeId: `123` })}
          className="border rounded-md px-1"
        >
          Criar Assinatura Stripe
        </button>
        <button
          onClick={handleCreateStripePortal}
          className="border rounded-md px-1"
        >
          Criar Portal de Pagamentos
        </button>
      </div>
    </div>
  )
}
