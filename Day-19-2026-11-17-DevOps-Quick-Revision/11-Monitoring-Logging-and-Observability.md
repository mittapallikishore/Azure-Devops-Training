# 11 – Monitoring, Logging and Observability

## Three pillars
- **Metrics:** numeric measurements over time (CPU, memory, latency, request rate).
- **Logs:** timestamped records of events.
- **Traces:** follow a request across distributed services.

Monitoring tells whether known conditions are healthy. Observability helps investigate why a system behaves as it does.

## Prometheus
- Pull-based metrics collection using scraping.
- Exporters expose metrics.
- PromQL queries time-series data.
- Alerting rules can send alerts through Alertmanager.

Example PromQL:
```promql
rate(http_requests_total[5m])
```

## Grafana
Creates dashboards and visualizations from data sources such as Prometheus and supported log/trace systems.

## ELK / Elastic Stack
- Elasticsearch – indexes and searches data.
- Logstash – processes/transforms data.
- Kibana – explores and visualizes data.
- Beats/agents – collect and forward data.

## Azure observability
- Azure Monitor – platform for metrics, logs and alerts.
- Log Analytics Workspace – stores/query logs.
- KQL – query language for log data.
- Application Insights – application performance and dependency telemetry.
- Diagnostic settings – route resource logs/metrics to destinations.

Example KQL:
```kusto
requests
| where timestamp > ago(1h)
| summarize RequestCount=count() by bin(timestamp, 5m)
```

## SLI, SLO and SLA
- SLI – measured indicator, such as availability or latency.
- SLO – internal target for an SLI.
- SLA – formal service commitment, often with consequences if missed.
- Error budget – acceptable unreliability within an SLO period.

## Incident response
Detect → acknowledge → assess impact → mitigate → communicate → recover → review root cause → prevent recurrence.

## Best practices
Use actionable alerts, dashboards tied to user impact, consistent structured logs, trace context propagation, retention policies and access controls.

## Interview check
**What is the difference between logs and metrics?** Metrics summarize numeric behavior over time; logs record individual events and contextual details.
