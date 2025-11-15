import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 bg-[rgba(41,40,40,0)]">
      {children}
    </div>
  );
}
