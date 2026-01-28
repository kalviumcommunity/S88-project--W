import { GetServerSideProps } from "next";
import { getDummyReports, WasteReport } from "../data/dummyReports";

type Props = {
  reports: WasteReport[];
  renderedAt: string;
};

export default function Dashboard({ reports, renderedAt }: Props) {
  return (
    <div style={{ padding: "24px" }}>
      <h1>♻️ Community Waste Segregation Dashboard</h1>

      <p>
        <b>Server Rendered At:</b>{" "}
        {new Date(renderedAt).toLocaleString()}
      </p>

      <table border={1} cellPadding={10} style={{ marginTop: "16px" }}>
        <thead>
          <tr>
            <th>Household</th>
            <th>Ward</th>
            <th>Dry</th>
            <th>Wet</th>
            <th>Hazardous</th>
            <th>Score</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id}>
              <td>{r.household}</td>
              <td>{r.ward}</td>
              <td>{r.dry}</td>
              <td>{r.wet}</td>
              <td>{r.hazardous}</td>
              <td>{r.score}</td>
              <td>{r.verified ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * 🔥 SERVER-SIDE RENDERING (Dynamic Rendering)
 * This runs on EVERY REQUEST
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const reports = getDummyReports();

  return {
    props: {
      reports,
      renderedAt: new Date().toISOString(),
    },
  };
};