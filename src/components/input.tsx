"use client"

import * as React from "react"

type InputProps = {
  label?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <input
        className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purplePrimary"
        {...props}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  )
}