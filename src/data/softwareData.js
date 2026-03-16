export const softwareData = [
  {
    id: "inventory-mgmt",
    name: "Inventory Management System",
    category: "desktop",
    version: "v1.0.0 (Alpha)",
    description: "Enterprise-grade stock tracking and supply chain management designed for high-volume retail and warehousing.",
    longDescription: "Inventory Management System brings precision to your stockroom. Built to handle complex multi-location warehousing, it provides granular visibility into your supply chain. From automated reordering to deep-dive profit analytics, it's the logistical backbone your business needs to scale safely in the Malawian market.",
    isComingSoon: true,
    features: ["Global Stock Sync", "Automated Procurement", "Margin Analytics", "Warehouse Heatmaps"],
    configTemplate: {
      appName: "Inventory Management System",
      version: "1.0.0-alpha",
      nodeSelection: "auto",
      analyticsMode: "full"
    }
  },
  {
    id: "rook-desk",
    name: "Control Center",
    category: "desktop",
    version: "v0.9.1-beta",
    description: "A centralized command interface for infrastructure monitoring, system health, and rapid deployment coordination.",
    longDescription: "The Control Center is where your infrastructure comes alive. It's a high-performance dashboard that aggregates telemetry from all your Rook-powered servers. Visualise uptime, monitor bandwidth spikes, and deploy patches across your entire network with a single, secure interface.",
    isComingSoon: true,
    features: ["Live Telemetry", "Traffic Distribution", "Emergency Rollbacks", "Custom Alert Logic"],
    configTemplate: {
      appName: "Control Center",
      instanceId: "local-node-01",
      logLevel: "heavy",
      refreshInterval: 2000
    }
  },
  {
    id: "rook-mobile-admin",
    name: "Mobile Command",
    category: "mobile",
    version: "iOS / Android (Internal)",
    description: "The power of the Rook platform in your pocket. Secure remote management and critical system alerts on the go.",
    longDescription: "Mobile Command ensures you're never disconnected from your critical services. It's a condensed, high-security version of our desktop suite, optimized for reliable performance over cellular networks. Manage support tickets, verify deployments, and receive prioritized alerts through our dedicated secure tunnel.",
    isComingSoon: true,
    features: ["Encrypted Remote Access", "Priority Alerting", "Resource Auditing", "Secure Field Comms"],
    configTemplate: {
      appName: "Mobile Command",
      authMethod: "biometric",
      lowBandwidthMode: true
    }
  },
  {
    id: "rook-cli",
    name: "Rook CLI Toolkit",
    category: "tools",
    version: "v1.4.2-stable",
    description: "The primary engine for CI/CD integration, secret management, and high-speed infrastructure automation.",
    longDescription: "The Rook CLI is the heart of our automation ecosystem. It replaces brittle scripts with a unified, type-safe command set for managing your cloud and on-premise resources. Whether you're standing up a new cluster or rotating API keys, the CLI provides the speed and safety and professional developers demand.",
    isComingSoon: false,
    downloadLink: "#",
    features: ["Atomic Deployments", "Secret Vaulting", "Cluster Provisioning", "Log Aggregation"],
    configTemplate: {
      toolName: "Rook CLI",
      version: "1.4.2",
      binaryPath: "/usr/local/bin/rook",
      defaultProtocol: "secure-rpc"
    }
  }
];
