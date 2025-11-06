
import React from 'react';
import type { Submission } from '../types';
import CloseIcon from './icons/CloseIcon';

interface SubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: Submission[];
}

const SubmissionsModal: React.FC<SubmissionsModalProps> = ({ isOpen, onClose, submissions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purplish-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-purplish-black text-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-purplish-black p-4 border-b border-gold/20 flex justify-between items-center">
          <h2 className="font-serif text-2xl text-gold">Cadastros Realizados</h2>
          <button onClick={onClose} className="text-white hover:text-gold transition-colors">
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-6">
          {submissions.length === 0 ? (
            <p className="text-soft-gold/80 text-center py-8">Nenhum cadastro recebido ainda.</p>
          ) : (
            <div className="space-y-4">
              {submissions.map((sub) => (
                <div key={sub.id} className="bg-white/5 p-4 rounded-md border border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-soft-gold">{sub.fullName}</h3>
                    <span className="text-xs text-gold/70">{sub.date}</span>
                  </div>
                  <p className="text-sm"><strong className="text-gold/80">E-mail:</strong> {sub.email}</p>
                  <p className="text-sm"><strong className="text-gold/80">Telefone:</strong> {sub.phone}</p>
                  <p className="text-sm"><strong className="text-gold/80">Assunto:</strong> {sub.subject}</p>
                  <p className="mt-2 text-sm bg-white/10 p-2 rounded">{sub.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-purplish-black p-4 border-t border-gold/20 flex justify-end">
            <button onClick={onClose} className="bg-gold text-purplish-black font-bold py-2 px-4 rounded-md hover:bg-soft-gold transition-colors">
              Fechar
            </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionsModal;
