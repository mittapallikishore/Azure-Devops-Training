# E-commerce System Design

```mermaid
flowchart TD
    A[Mobile App] --> B[API Gateway]
    B --> C[Authentication Service]
    B --> D[Product Service]
    B --> E[Order Service]
    E --> F[Payment Gateway]
    C --> G[(User Database)]
    D --> H[(Product Database)]
    E --> I[(Order Database)]
    J[Cloud Infrastructure] -. Hosts .-> B
    J -. Hosts .-> C
    J -. Hosts .-> D
    J -. Hosts .-> E
```

## Components
- Mobile App: User interface.
- API Gateway: Routes requests.
- Authentication: Verifies users.
- Product Service: Manages products.
- Order Service: Processes orders.
- Payment Gateway: Processes payments.
- Databases: Store application data.
- Cloud: Hosts application services.
