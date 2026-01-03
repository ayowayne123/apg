import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-4"> Payment Successful!</h1>
      <p className="mb-6">
        Thank you for your purchase. Your order has been confirmed.
      </p>
      <Link href="/" className="btn pryBtn px-6 py-2 rounded hover:opacity-80">
        Back to Home
      </Link>
    </main>
  );
}
