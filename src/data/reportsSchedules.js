export default [
  {
    schedule_id: 1,
    name: "Daily Sales Report",
    report_type: "sales_summary",
    frequency: "daily",
    recipients: "admin@example.com,sales@example.com",
    format: "pdf",
    parameters: {
      include_taxes: true,
      include_refunds: false,
    },
    is_active: true,
    last_sent_at: "2023-05-15T00:00:00Z",
    next_send_at: "2023-05-16T00:00:00Z",
    created_at: "2023-01-01T08:00:00Z",
    updated_at: "2023-05-15T09:30:00Z",
    created_by: 1,
  },
  {
    schedule_id: 2,
    name: "Weekly Inventory Report",
    report_type: "inventory_status",
    frequency: "weekly",
    recipients: "inventory@example.com",
    format: "excel",
    parameters: {
      low_stock_threshold: 5,
    },
    is_active: true,
    last_sent_at: "2023-05-08T00:00:00Z",
    next_send_at: "2023-05-15T00:00:00Z",
    created_at: "2023-01-01T08:00:00Z",
    updated_at: "2023-05-08T00:00:00Z",
    created_by: 1,
  },
  {
    schedule_id: 3,
    name: "Monthly Financial Report",
    report_type: "financial_summary",
    frequency: "monthly",
    recipients: "finance@example.com,ceo@example.com",
    format: "pdf",
    parameters: {
      include_expenses: true,
      include_profit: true,
    },
    is_active: true,
    last_sent_at: "2023-05-01T00:00:00Z",
    next_send_at: "2023-06-01T00:00:00Z",
    created_at: "2023-01-01T08:00:00Z",
    updated_at: "2023-05-01T00:00:00Z",
    created_by: 1,
  },
  {
    schedule_id: 4,
    name: "Weekly Marketing Report",
    report_type: "marketing_performance",
    frequency: "weekly",
    recipients: "marketing@example.com",
    format: "excel",
    parameters: {
      include_campaigns: true,
      include_conversions: true,
    },
    is_active: true,
    last_sent_at: "2023-05-08T00:00:00Z",
    next_send_at: "2023-05-15T00:00:00Z",
    created_at: "2023-02-15T10:45:00Z",
    updated_at: "2023-05-08T00:00:00Z",
    created_by: 2,
  },
  {
    schedule_id: 5,
    name: "Quarterly Vendor Performance",
    report_type: "vendor_performance",
    frequency: "monthly",
    recipients: "vendors@example.com,procurement@example.com",
    format: "pdf",
    parameters: {
      include_ratings: true,
      include_sales: true,
    },
    is_active: true,
    last_sent_at: "2023-04-01T00:00:00Z",
    next_send_at: "2023-07-01T00:00:00Z",
    created_at: "2023-01-01T08:00:00Z",
    updated_at: "2023-04-01T00:00:00Z",
    created_by: 1,
  },
  {
    schedule_id: 6,
    name: "Daily Abandoned Carts",
    report_type: "abandoned_carts",
    frequency: "daily",
    recipients: "marketing@example.com,sales@example.com",
    format: "csv",
    parameters: {
      time_threshold: 24,
    },
    is_active: true,
    last_sent_at: "2023-05-15T00:00:00Z",
    next_send_at: "2023-05-16T00:00:00Z",
    created_at: "2023-03-01T09:15:00Z",
    updated_at: "2023-05-15T00:00:00Z",
    created_by: 1,
  },
  {
    schedule_id: 7,
    name: "Weekly Customer Acquisition",
    report_type: "customer_acquisition",
    frequency: "weekly",
    recipients: "marketing@example.com",
    format: "excel",
    parameters: {
      include_sources: true,
      include_conversion: true,
    },
    is_active: true,
    last_sent_at: "2023-05-08T00:00:00Z",
    next_send_at: "2023-05-15T00:00:00Z",
    created_at: "2023-02-15T10:45:00Z",
    updated_at: "2023-05-08T00:00:00Z",
    created_by: 2,
  },
  {
    schedule_id: 8,
    name: "Monthly Product Performance",
    report_type: "product_performance",
    frequency: "monthly",
    recipients: "merchandising@example.com",
    format: "pdf",
    parameters: {
      top_products: 20,
      include_metrics: true,
    },
    is_active: true,
    last_sent_at: "2023-05-01T00:00:00Z",
    next_send_at: "2023-06-01T00:00:00Z",
    created_at: "2023-01-01T08:00:00Z",
    updated_at: "2023-05-01T00:00:00Z",
    created_by: 1,
  },
  {
    schedule_id: 9,
    name: "Annual Tax Report",
    report_type: "tax_summary",
    frequency: "yearly",
    recipients: "finance@example.com,accounting@example.com",
    format: "pdf",
    parameters: {
      year: 2023,
      include_breakdown: true,
    },
    is_active: true,
    last_sent_at: "2023-01-01T00:00:00Z",
    next_send_at: "2024-01-01T00:00:00Z",
    created_at: "2023-01-01T08:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
    created_by: 1,
  },
  {
    schedule_id: 10,
    name: "Daily Website Traffic",
    report_type: "website_traffic",
    frequency: "daily",
    recipients: "marketing@example.com,analytics@example.com",
    format: "csv",
    parameters: {
      include_sources: true,
      include_geo: true,
    },
    is_active: true,
    last_sent_at: "2023-05-15T00:00:00Z",
    next_send_at: "2023-05-16T00:00:00Z",
    created_at: "2023-04-01T08:45:00Z",
    updated_at: "2023-05-15T00:00:00Z",
    created_by: 1,
  },
];
