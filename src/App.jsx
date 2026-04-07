import LoanForm from "./pages/LoanForm";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
     
      <header className="bg-white border-b border-slate-200 py-8 mb-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center">
            MSME <span className="text-blue-600">Credit Decision</span> System
          </h1>
          <p className="mt-2 text-center text-slate-500 max-w-2xl mx-auto">
            Get instant credit eligibility analysis for small and medium enterprises 
            powered by real-time risk assessment.
          </p>
        </div>
      </header>

     
      <main className="pb-20">
        <LoanForm />
      </main>

      <footer className="text-center text-slate-400 text-sm py-6">
        &copy; {new Date().getFullYear()} Vito Systems. All rights reserved.
      </footer>
    </div>
  );
}

export default App;