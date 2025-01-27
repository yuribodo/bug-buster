import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Reviews />
      <FAQ />
      <Footer/>
    </div>
  );
};

export default Page;
