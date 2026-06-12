import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

export default function Toast({ toast, onDismiss }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="alert"
          aria-live="polite"
          className={`fixed bottom-6 right-6 z-[100] max-w-sm w-[calc(100%-3rem)] flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-xl ${
            toast.type === 'success'
              ? 'bg-brand-500/15 border-brand-500/30 shadow-brand-500/10'
              : 'bg-red-500/15 border-red-500/30 shadow-red-500/10'
          }`}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="text-brand-400 shrink-0 mt-0.5" size={22} />
          ) : (
            <XCircle className="text-red-400 shrink-0 mt-0.5" size={22} />
          )}
          <p className="text-sm text-white leading-relaxed flex-1">{toast.message}</p>
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
