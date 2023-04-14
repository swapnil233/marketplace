import AdCard from "@/components/AdCard";
import Hero from "@/components/ui/Hero";
import { Button } from "flowbite-react";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data, status: Session } = useSession();
  const user = data?.user;

  let heroButtonsLayout;

  if (!user) {
    heroButtonsLayout = (
      <>
        <div>
          <Button>Create an account</Button>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-5">
          <Button onClick={() => signIn()} color="light">
            Log in
          </Button>
        </div>
      </>
    );
  } else {
    heroButtonsLayout = (
      <>
        <div>
          <Button href="/users">Browse</Button>
        </div>
      </>
    );
  }

  return (
    <main>
      {/* Hero */}
      <Hero heroButtonsLayout={heroButtonsLayout} />

      {/* Recently posted ads */}
      <div className="pb-12 pt-10 md:pt-16 container flex flex-col w-full">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6">
          <section className="pb-12 md:pb-20">
            <div className="max-w-5xl w-full">
              <h1 className="text-4xl mb-4">Recently posted</h1>
            </div>
            <div className="mb-10">
              <p className="text-xl text-slate-600">
                See what your neighbours are selling
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              <AdCard />
              <AdCard />
              <AdCard />
              <AdCard />
              <AdCard />
              <AdCard />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
