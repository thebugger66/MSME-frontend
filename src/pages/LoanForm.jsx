import { useState } from "react";
import axios from "axios";

function LoanForm() {
  const [form, setForm] = useState({
    name: "",
    pan: "",
    businessType: "",
    monthlyRevenue: "",
    loanAmount: "",
    tenure: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/apply-loan",
        form
      );
      setResult(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Loan Application</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              name="name" 
              placeholder="John Doe" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              onChange={handleChange} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
            <input 
              name="pan" 
              placeholder="ABCDE1234F" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              onChange={handleChange} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
            <input 
              name="businessType" 
              placeholder="e.g. Retail" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              onChange={handleChange} 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rev.</label>
              <input 
                name="monthlyRevenue" 
                type="number" 
                placeholder="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                onChange={handleChange} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
              <input 
                name="loanAmount" 
                type="number" 
                placeholder="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                onChange={handleChange} 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tenure (Months)</label>
            <input 
              name="tenure" 
              type="number" 
              placeholder="12"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              onChange={handleChange} 
            />
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow transition-colors duration-200 mt-4"
          >
            Apply Now
          </button>
        </div>

        {result && (
          <div className={`mt-8 p-6 rounded-lg border ${result.decision === 'Approved' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <h2 className={`text-xl font-bold ${result.decision === 'Approved' ? 'text-green-800' : 'text-red-800'}`}>
              Decision: {result.decision}
            </h2>
            <p className="text-gray-700 font-medium mt-1">Credit Score: <span className="font-bold">{result.creditScore}</span></p>

            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Reasons:</h3>
              <ul className="mt-2 space-y-1">
                {result.reasons.map((r, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start">
                    <span className="mr-2">•</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoanForm;