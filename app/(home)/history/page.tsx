import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History',
};

const History = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Recent Transactions History
    </main>
  );
};

export default History;
