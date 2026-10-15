
// import { useState } from "react";
// import {
//   ChartNoAxesCombined,
//   ClipboardList,
// } from "lucide-react";

// import "../CSS/Calculator.css";

// const money = (value) =>
//   new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(Number.isFinite(value) ? value : 0);

// const initialForm = {
//   cost: "0",
//   extra: "0",
//   sell: "0",
//   qty: "0",
// };

// export default function Calculator() {
//   const [form, setForm] = useState(initialForm);

//   const cost = Math.max(0, Number(form.cost) || 0);
//   const extra = Math.max(0, Number(form.extra) || 0);
//   const sell = Math.max(0, Number(form.sell) || 0);
//   const qty = Math.max(0, Number(form.qty) || 0);

//   const unitCost = cost + extra;
//   const revenue = sell * qty;
//   const totalCost = unitCost * qty;
//   const profit = revenue - totalCost;
//   const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

//   function update(field, value) {
//     setForm((previous) => ({
//       ...previous,
//       [field]: value,
//     }));
//   }

//   function reset() {
//     setForm({ ...initialForm });
//   }

//   return (
//     <main className="calculator-page">
//       {/* Full-width hero */}
//       <section className="page-hero">
//         <div className="eyebrow">BUSINESS PLANNING TOOL</div>

//         <h1>
//           Understand your
//           <br />
//           <span>profit potential.</span>
//         </h1>

//         <p>
//           Estimate revenue, costs, gross profit and gross margin
//           using your own product figures.
//         </p>
//       </section>

//       {/* Calculator content */}
//       <section className="calculator-section">
//         {/* Introduction */}
//         <div className="calculator-intro">
//           <div className="eyebrow">YOUR NUMBERS</div>

//           <h2>
//             Make informed
//             <br />
//             <span>decisions.</span>
//           </h2>

//           <p>
//             Change any value to calculate the estimated financial
//             result immediately.
//           </p>

//           <div className="calculator-tip">
//             <ClipboardList size={20} />

//             <span>
//               <strong>Planning estimate only</strong>

//               <small>
//                 Include shipping, duties, taxes, marketing, returns
//                 and other expenses separately for a fuller cost model.
//               </small>
//             </span>
//           </div>
//         </div>

//         {/* Calculator form */}
//         <div className="calculator-card">
//           <div className="calculator-card-heading">
//             <span>
//               <ChartNoAxesCombined size={19} />
//               Profit &amp; margin calculator
//             </span>

//             <span className="sample-pill">LIVE ESTIMATE</span>
//           </div>

//           <div className="calculator-fields">
//             <label>
//               Wholesale cost / unit

//               <div className="input-with-prefix">
//                 <span>$</span>

//                 <input
//                   type="number"
//                   min="0"
//                   step="0.01"
//                   value={form.cost}
//                   onChange={(event) =>
//                     update("cost", event.target.value)
//                   }
//                   aria-label="Wholesale cost per unit"
//                 />
//               </div>
//             </label>

//             <label>
//               Extra cost / unit

//               <div className="input-with-prefix">
//                 <span>$</span>

//                 <input
//                   type="number"
//                   min="0"
//                   step="0.01"
//                   value={form.extra}
//                   onChange={(event) =>
//                     update("extra", event.target.value)
//                   }
//                   aria-label="Extra cost per unit"
//                 />
//               </div>
//             </label>

//             <label>
//               Selling price / unit

//               <div className="input-with-prefix">
//                 <span>$</span>

//                 <input
//                   type="number"
//                   min="0"
//                   step="0.01"
//                   value={form.sell}
//                   onChange={(event) =>
//                     update("sell", event.target.value)
//                   }
//                   aria-label="Selling price per unit"
//                 />
//               </div>
//             </label>

//             <label>
//               Order quantity

//               <div className="input-with-prefix">
//                 <input
//                   type="number"
//                   min="0"
//                   step="1"
//                   value={form.qty}
//                   onChange={(event) =>
//                     update("qty", event.target.value)
//                   }
//                   aria-label="Order quantity"
//                 />
//               </div>
//             </label>
//           </div>

//           {/* Calculated results */}
//           <div className="results-panel">
//             <div className="result-primary">
//               <span>Estimated gross profit</span>

//               <strong>{money(profit)}</strong>

//               <small>
//                 Across {qty.toLocaleString()} units
//               </small>
//             </div>

//             <div className="result-secondary">
//               <div>
//                 <span>Estimated revenue</span>
//                 <strong>{money(revenue)}</strong>
//               </div>

//               <div>
//                 <span>Total product costs</span>
//                 <strong>{money(totalCost)}</strong>
//               </div>

//               <div>
//                 <span>Profit per unit</span>
//                 <strong>{money(sell - unitCost)}</strong>
//               </div>

//               <div>
//                 <span>Gross margin</span>

//                 <strong>
//                   {revenue > 0 ? `${margin.toFixed(1)}%` : "—"}
//                 </strong>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="calculator-foot">
//             <span>Currency: USD</span>

//             <button type="button" onClick={reset}>
//               Reset values
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }