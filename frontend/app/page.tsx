import React from 'react';
import { Cloud, Server, Shield, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-300 font-mono">
       <div className="border-b border-[#30363d] p-6 flex justify-between items-center bg-[#161b22]">
         <div className="font-bold text-xl text-white flex items-center gap-2">
           <Cloud className="text-blue-500" /> GitOps<span className="text-gray-500">Platform</span>
         </div>
         <div className="flex gap-4 text-sm">
           <span className="flex items-center gap-1 text-green-500"><Server size={14}/> Cluster: prod-us-east</span>
           <span className="flex items-center gap-1 text-blue-500"><Shield size={14}/> Policy: Enforced</span>
         </div>
       </div>

       <div className="p-8 max-w-6xl mx-auto">
         <h1 className="text-3xl font-bold text-white mb-8">Infrastructure State</h1>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visual Topology */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 relative h-96">
               <div className="absolute top-4 left-4 text-sm font-bold text-gray-500">Topology Map</div>
               <div className="flex items-center justify-center h-full">
                  <div className="border-2 border-dashed border-gray-700 p-8 rounded-full flex flex-col items-center gap-4 relative">
                     <div className="bg-blue-900/20 p-4 rounded border border-blue-500/50 text-blue-400">Load Balancer</div>
                     <div className="h-8 w-0.5 bg-gray-700"></div>
                     <div className="flex gap-8">
                        <div className="bg-green-900/20 p-4 rounded border border-green-500/50 text-green-400">Pod A</div>
                        <div className="bg-green-900/20 p-4 rounded border border-green-500/50 text-green-400">Pod B</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Sync Status / Logs */}
            <div className="bg-[#000] border border-[#30363d] rounded-lg p-4 font-mono text-sm overflow-hidden">
               <div className="flex justify-between mb-4 border-b border-[#30363d] pb-2">
                  <span className="text-white">Sync Logs</span>
                  <RefreshCw size={14} className="text-gray-500"/>
               </div>
               <div className="space-y-2">
                  <div className="text-gray-500">10:00:01 <span className="text-blue-400">INFO</span> Fetching manifests from git...</div>
                  <div className="text-gray-500">10:00:02 <span className="text-yellow-400">WARN</span> Drift detected in ingress-controller</div>
                  <div className="text-gray-500">10:00:04 <span className="text-blue-400">INFO</span> Applying patch...</div>
                  <div className="text-gray-500">10:00:06 <span className="text-green-400">SUCCESS</span> State reconciled.</div>
               </div>
            </div>
         </div>
       </div>
    </main>
  );
}
