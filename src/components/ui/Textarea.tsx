import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  label?: string
  error?: string
  hint?: string
  className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, hint, className, id, required, rows = 5, ...rest },
  ref,
) {
  const fieldId = id ?? rest.name
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-meta-navy">
          {label}
          {required && <span className="ml-0.5 text-meta-pink">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={fieldId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
        className={cn(
          'block w-full resize-y rounded-lg border bg-white px-3.5 py-2.5 text-sm text-meta-navy placeholder:text-slate-400 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500',
          error
            ? 'border-meta-red/60 focus:border-meta-red focus:ring-meta-red/20'
            : 'border-slate-300 hover:border-slate-400 focus:border-meta-blue focus:ring-meta-blue/20',
        )}
        {...rest}
      />
      {hint && !error && (
        <p id={`${fieldId}-hint`} className="mt-1.5 text-xs text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${fieldId}-error`} role="alert" className="mt-1.5 text-xs font-medium text-meta-red">
          {error}
        </p>
      )}
    </div>
  )
})
