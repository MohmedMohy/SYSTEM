export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>HR System Dashboard</h1>
        <p style={styles.subtitle}>
          Job Intake • Templates • Candidates Tracking
        </p>
      </header>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>📊 Jobs</h2>
          <p>Manage job postings and imports</p>
        </div>

        <div style={styles.card}>
          <h2>🧾 Templates</h2>
          <p>Create dynamic post templates</p>
        </div>

        <div style={styles.card}>
          <h2>👤 Candidates</h2>
          <p>Track applicants and pipeline</p>
        </div>

        <div style={styles.card}>
          <h2>⚙️ Settings</h2>
          <p>System configuration</p>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 30,
    fontFamily: "Arial, sans-serif",
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    margin: 0,
  },
  subtitle: {
    color: "#94a3b8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
  },
  card: {
    background: "#1e293b",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #334155",
    cursor: "pointer",
  },
};