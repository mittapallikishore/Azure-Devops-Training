# 04 - Payment Integration and Circuit Breaker

## Objective
Integrate the Payment Service with the Orders API and implement a circuit breaker to handle payment-service failures.

## Payment Request Flow

1. Client submits a payment request for an order.
2. NGINX forwards the request to the web application.
3. The Orders API retrieves the order.
4. The web application sends a request to `http://payment:4000/payments`.
5. Payment Service processes the request.
6. The payment response is returned to the Orders API.
7. The order status is updated to Paid after successful payment.

## Payment Service

The Payment Service is implemented in:

`payment-service/server.js`

It:
- Receives payment requests.
- Validates the request data.
- Returns payment approval information.
- Generates a transaction ID.

The sample order used in testing was order 501.

## Circuit Breaker

The circuit breaker protects the Orders API from repeatedly calling an unavailable Payment Service.

The implementation uses three states:

### CLOSED
- Normal operation.
- Requests are allowed.
- Failures are counted.

### OPEN
- The failure threshold has been reached.
- Further payment calls are blocked temporarily.
- The application returns an unavailable response.

### HALF-OPEN
- The recovery timeout has elapsed.
- A limited probe request is allowed.
- A successful probe closes the circuit.
- A failed probe returns the circuit to OPEN.

## Configuration Used

| Setting | Value |
|---|---:|
| Failure threshold | 3 |
| Recovery timeout | 10 seconds |
| Payment request timeout | 3 seconds |

The circuit breaker is implemented in `routes/orders.js`.

## Failure Simulation

1. Stop the Payment Service container.
2. Send payment requests through the Orders API.
3. Observe the failed requests.
4. After three consecutive failures, inspect the circuit breaker state.
5. Confirm that the circuit enters OPEN.
6. Wait for the recovery timeout.
7. Confirm that the circuit enters HALF-OPEN.
8. Restart the Payment Service.
9. Allow a successful probe.
10. Confirm that the circuit returns to CLOSED.

## Observed Results

- Three payment attempts failed while the Payment Service was unavailable.
- The circuit breaker entered OPEN.
- Requests were blocked while the circuit was open.
- After the recovery period, the circuit allowed a probe.
- A successful payment request closed the circuit.
- Payment processing succeeded after service recovery.

## Important Implementation Details

- The payment call uses a three-second timeout.
- The circuit breaker tracks consecutive failures.
- The implementation allows only one half-open probe at a time.
- Successful payment resets the failure state.
- The sample order status changes to Paid after success.

## Limitations

The current implementation stores order data and circuit breaker state in application memory. This is suitable for a training exercise, but a production deployment with multiple application replicas requires shared state or a distributed circuit breaker strategy.

## Outcome

Integrated a separate Payment Service with the Orders API and demonstrated circuit-breaker failure handling and recovery.
