import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'Queen Mary Machine Learning Society',
  description: 'Queen Mary Machine Learning Society',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        {/* Background Image */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg4.webp')" }}
        />

        {/* Sticky Layout Structure */}
        <Navbar />

        {/* Main Content Area: grows to fill space */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer: always at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
