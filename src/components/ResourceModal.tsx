import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function ResourceModal({ isOpen, onClose, title, icon, children }: ResourceModalProps) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, overflowY: 'auto' }}>
      {/* Backdrop */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 9998
        }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '5rem', zIndex: 9999 }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '56rem', margin: '0 1rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
          {/* Modal Header */}
          <div style={{ background: 'linear-gradient(to right, #15803d, #059669, #0369a1)' }} className="text-white p-6 sm:p-8 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-4">
              {icon && <div className="text-3xl sm:text-4xl">{icon}</div>}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
            >
              <X size={28} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[calc(100vh-200px)] overflow-y-auto">
            {children}
          </div>

          {/* Close Button at Bottom */}
          <div className="border-t border-gray-200 p-4 sm:p-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
