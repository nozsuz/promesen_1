import React from 'react';
import { Building2 } from 'lucide-react';
import { expertiseAreas } from '../data/expertiseAreas';

export default function Organizations() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {expertiseAreas.map(area => (
          <div key={area.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center">
                {area.icon}
                <span className="ml-2">{area.name}分野</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid gap-4">
                {area.organizations.map(org => (
                  <div key={org.id} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg text-gray-800">{org.name}</h3>
                        <div className="text-sm text-indigo-600 mt-1">{org.type}</div>
                      </div>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                        {area.name}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{org.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}