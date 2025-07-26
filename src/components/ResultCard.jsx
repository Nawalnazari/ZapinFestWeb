export default function ResultCard({ matchResults }) {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow p-6 mb-8 w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Match Results
        </h2>
        <div className="space-y-4">
          {matchResults.map((result, idx) => (
            <div
              key={idx}
              className="flex flex-row justify-evenly bg-gray-50 rounded p-4"
            >
              <div className="flex max-sm:flex-col items-center gap-2">
                <span className="font-medium text-gray-700">{result.home}</span>
                <span className="text-lg font-bold text-gray-800">
                  {result.homeScore} - {result.awayScore}
                </span>
                <span className="font-medium text-gray-700 ">
                  {result.away}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
