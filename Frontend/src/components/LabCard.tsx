import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TagChip } from './TagChip';

export function LabCard({ lab }: { lab: any }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating to lab:', lab.id);
    navigate(`/lab/${lab.id}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-neutral-950 mb-2">{lab.name}</h3>
      <p className="text-[#4a5565] mb-4">{lab.professor}</p>
      <p className="text-[#364153] mb-4">{lab.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {lab.tags.map((tag: string) => (
          <TagChip 
            key={tag} 
            label={tag}
            className="bg-gray-100"
          />
        ))}
      </div>
      
      <button 
        onClick={handleClick}
        className="w-full bg-[#A1121A] text-white py-2 px-6 rounded-lg hover:bg-[#8A0F16] transition-colors"
      >
        View Lab
      </button>
    </div>
  );
}
