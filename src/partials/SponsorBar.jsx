import React from "react";

function SponsorBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 flex items-center justify-center py-2 border-t border-gray-200 dark:border-gray-700">
      {/* Logo sponsor */}
      <img
        src="/src/images/kementerianPelancongan.png"
        alt="Sponsor 1"
        className="h-8 mx-4"
      />
      <img
        src="/src/images/majuJohor.jpeg"
        alt="Sponsor 2"
        className="h-8 mx-4"
      />
      <img
        src="/src/images/visitJohor.jpeg"
        alt="Sponsor 2"
        className="h-8 mx-4"
      />
      {/* Tambah logo lain jika perlu */}
    </div>
  );
}

export default SponsorBar;
