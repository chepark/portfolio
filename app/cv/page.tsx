import { Metadata } from 'next';
import CVPage from '../../components/pages/CVPage';

export const metadata: Metadata = {
  title: 'CV — Chaeah Park',
  description: 'Software Engineer focused on Frontend Development.',
};

export default async function Page() {
  return <CVPage />;
}
