'use client';

import { AdviseCard } from '@components/advises/advise-card';
import { useQuery } from '@tanstack/react-query';
import { fetchAdvises } from '@/actions/advises/fetch-advises';
import { AddAdvise } from './add-advise';
import { Session, User } from '@prisma/client';
import { Heading2 } from '../ui/heading-2';

export const AdvisesList = ({ session }: { session: (Session & { user: User }) | null }) => {
  const {
    data: advises = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['advises'],
    queryFn: () => fetchAdvises(1),
  });

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-background/95 pb-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between pt-4">
          <Heading2>Consejos</Heading2>
          {session && <AddAdvise refetch={refetch} />}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="flex flex-col gap-4">
            {advises.length === 0 && (
              <p className="w-full text-center text-sm text-muted-foreground">
                No hay consejos para ver aún.
              </p>
            )}

            {advises.map((advise) => (
              <AdviseCard key={advise.id} advise={advise} session={session} />
            ))}
          </div>
        </div>

        <div className="hidden md:col-span-2 md:block">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <p className="text-sm text-muted-foreground">
                Este es un espacio para compartir consejos y experiencias 🚀
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Animate y compartí tus conocimientos, entre todos vamos a llegar más lejos 💪
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 font-semibold">PCN Checkpoints</h3>

              <p className="text-sm text-muted-foreground">
                Cada tanto nos juntamos presencialmente o en Discord para charlar sobre ingeniería
                de software, sumate! 🙌
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
