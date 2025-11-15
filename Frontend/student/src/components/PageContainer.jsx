import React from 'react';

export function PageContainer({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 bg-[rgba(41,40,40,0)]">
      {children}
    </div>
  );
}
