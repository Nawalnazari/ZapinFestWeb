export default function ScoreboardCard({ tableName, teams }) {
  return (
    <div className="flex-auto bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {tableName} Tournament Scoreboard
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-medium">#</th>
              <th className="py-2 px-4 border-b font-medium">Team Name</th>
              <th className="py-2 px-4 border-b font-medium">Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.name} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{idx + 1}</td>
                <td className="py-2 px-4 border-b">{team.name}</td>
                <td className="py-2 px-4 border-b">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
