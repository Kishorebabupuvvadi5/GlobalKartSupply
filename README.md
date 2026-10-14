# Global Kart Supply — React + Vite

A responsive storefront prototype for a commerce and sourcing platform covering B2B wholesale, dropshipping discovery, B2C product discovery, and global sourcing enquiries.

## Requirements
- Node.js 20.19+ or 22.12+ recommended for current Vite releases
- npm

## Run on Windows / VS Code
1. Extract this ZIP.
2. Open the `global-Kart-supply` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).
6. Stop the server with `Ctrl+C`.

## Production build
```bash
npm run build
npm run preview
```

## Implemented in this prototype
- Responsive homepage and mobile navigation
- B2B wholesale, dropshipping, B2C and sourcing sections
- Sample product catalog, search, category filtering, and sorting
- MOQ-based Kart increments/decrements and localStorage persistence
- Quote enquiry form with basic client-side validation
- Enquiry export as a local `.txt` file
- Interactive profit and gross margin calculator
- Light/dark theme toggle
- Reduced-motion support and semantic controls

## Important limitations
- Products, prices, MOQs, and availability are illustrative sample data.
- The enquiry form downloads a text file locally; it does not send email or store requests on a server.
- No real supplier integrations, fulfilment, inventory, accounts, admin dashboard, database, checkout, or payments are connected.
- The Kart is stored only in the current browser and is not shared across devices.
- The sample wholesale prices are in USD; configure currency and real product data before launch.

## Next stages
1. Confirm real business model rules, regions, currency, supplier data, and quote process.
2. Add backend API and database for products, enquiries, suppliers, inventory, and order statuses.
3. Add secure customer/admin authentication and role-based authorization.
4. Add real supplier integrations, shipping logic, and a payment provider only when required.
5. Test responsive layouts and workflows in target browsers before production.
