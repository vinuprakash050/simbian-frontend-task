import WithoutSimbian from '@/components/WithoutSimbian';
import WithSimbian from '@/components/WithSimbian';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4">
      <WithoutSimbian />
      <WithSimbian />
    </main>
  );
}