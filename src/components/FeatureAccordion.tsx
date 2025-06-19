"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FeaturesProp = {
  id: string;
  title: string;

  content: string;
};

export default function FeatureAccordion() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const features: FeaturesProp[] = [
    {
      id: "Content Generation",
      title: "Content Generation",
      content: "Generate high-quality 3D content using AI-powered tools and advanced algorithms to create stunning visual assets for your marketing campaigns.",
    },
    {
      id: "Virtual Photography",
      title: "Virtual Photography",
      content: "Create photorealistic images and videos without physical photography sessions. Perfect lighting, angles, and environments every time.",
    },
    {
      id: "3D Configurator",
      title: "3D Configurator",
      content: "The 3D Source™ Unreal Engine Configurator can drastically increase sales, reduce returns, and grow customer engagement.",
    },
    {
      id: "Streaming Unreal Engine",
      title: "Streaming Unreal Engine",
      content: "Stream high-fidelity Unreal Engine experiences directly to any device without requiring powerful hardware or lengthy downloads.",
    },
  ];

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className=" space-y-4">
      {features.map((feature) => (
        <div key={feature.id} className="bg-gray-50 rounded-lg overflow-hidden">
          <button onClick={() => toggleItem(feature.id)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors">
            <h3 className="text-lg font-semibold text-slate-700">{feature.title}</h3>
            <div className="text-green-500">{expandedItem === feature.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</div>
          </button>

          {expandedItem === feature.id && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">{feature.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
