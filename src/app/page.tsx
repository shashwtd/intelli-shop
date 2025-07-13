import { Sparkles } from "lucide-react";

export default function Home() {
    return (
        <main className="h-screen w-full bg-neutral-50">
            <div className="flex flex-col h-full items-center justify-center  max-h-[600px]">
                <h1 className="text-3xl font-mono font-semibold tracking-tighter">
                    Welcome to IntelliShop
                </h1>
                <p className="mt-4 text-lg text-center font-sans max-w-xl">
                    Think of Intelli-Shop as your smart shopping sidekick that
                    helps you find the right product, at the right place, for
                    the right price.
                </p>
                <hr className="mt-6 mb-4 w-full max-w-xl border-black/30" />
                <label
                    htmlFor="product-search"
                    className="mt-6 text-base font-medium"
                >
                    What product are you looking for?
                </label>
                <div className="mt-2 flex w-full max-w-lg gap-1">
                    <input
                        id="product-search"
                        type="text"
                        placeholder="Type your product..."
                        className="px-4 py-2 border  w-full focus:outline-none"
                    />
                    <button
                        type="button"
                        className="px-4 text-nowrap gap-4 py-3 bg-blue-700 text-white rounded-r flex items-center justify-center hover:bg-blue-900 transition"
                        aria-label="Search"
                    >
                        <Sparkles size={20} /> Find Options
                    </button>
                </div>
            </div>
        </main>
    );
}
