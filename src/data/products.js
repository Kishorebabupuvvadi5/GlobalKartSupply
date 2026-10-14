export const categories = ['All products', 'Electronics', 'Home & Living', 'Fashion', 'Office Supplies', 'Accessories']

export const products = [
  { id: 'GCS-101', name: 'Wireless Bluetooth Headphones', category: 'Electronics', wholesale: 18.5, retail: 34.99, moq: 10, badge: 'Popular', icon: 'headphones', tone: 'lavender', description: 'Everyday wireless audio for retail and reseller channels.' },
  { id: 'GCS-102', name: 'Minimal Desk Lamp', category: 'Home & Living', wholesale: 12.2, retail: 26.5, moq: 12, badge: 'Bulk value', icon: 'lamp-desk', tone: 'sand', description: 'A clean, compact lighting option for home and office spaces.' },
  { id: 'GCS-103', name: 'Insulated Travel Bottle', category: 'Accessories', wholesale: 7.4, retail: 18.99, moq: 24, badge: 'New arrival', icon: 'bottle-water', tone: 'mint', description: 'Reusable drinkware suited to gifting and everyday retail.' },
  { id: 'GCS-104', name: 'Everyday Canvas Tote', category: 'Fashion', wholesale: 3.8, retail: 11.99, moq: 50, badge: 'Reseller pick', icon: 'shopping-bag', tone: 'peach', description: 'Versatile canvas bags for stores, events, and branded programs.' },
  { id: 'GCS-105', name: 'Ergonomic Wireless Mouse', category: 'Electronics', wholesale: 9.6, retail: 21.99, moq: 20, badge: '', icon: 'mouse', tone: 'blue', description: 'A practical computer accessory for office and electronics retailers.' },
  { id: 'GCS-106', name: 'Modular Storage Organiser', category: 'Home & Living', wholesale: 6.75, retail: 16.99, moq: 18, badge: '', icon: 'package', tone: 'yellow', description: 'Flexible storage for desks, shelves, and household spaces.' },
  { id: 'GCS-107', name: 'A5 Business Notebook Set', category: 'Office Supplies', wholesale: 4.25, retail: 10.5, moq: 30, badge: 'Bulk value', icon: 'notebook', tone: 'mint', description: 'A simple stationery set for offices, education, and resale.' },
  { id: 'GCS-108', name: 'Compact Travel Backpack', category: 'Fashion', wholesale: 16.9, retail: 39.99, moq: 10, badge: '', icon: 'backpack', tone: 'blue', description: 'A versatile everyday bag for travel and lifestyle retail.' }
]

export const businessModels = [
  { key: 'wholesale', title: 'B2B wholesale', description: 'Source in volume with product-level minimums and quote-based pricing.', icon: 'boxes' },
  { key: 'dropshipping', title: 'Dropshipping', description: 'Explore products and suppliers that may support direct-to-customer fulfilment.', icon: 'truck' },
  { key: 'retail', title: 'B2C shopping', description: 'Discover products for individual customers and retail shopping journeys.', icon: 'shopping-bag' },
  { key: 'sourcing', title: 'Global sourcing', description: 'Share your specification, target quantity, and destination for a tailored sourcing enquiry.', icon: 'globe-2' }
]