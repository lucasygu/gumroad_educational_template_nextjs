'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<Record<string, unknown>>({})

  useEffect(() => {
    const checkConnection = async () => {
      const debug: Record<string, unknown> = {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT_FOUND',
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'EXISTS' : 'NOT_FOUND',
        timestamp: new Date().toISOString()
      }

      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, status')
          .limit(5)

        debug.supabaseQuery = {
          success: !error,
          error: error?.message || null,
          dataCount: data?.length || 0,
          firstPost: data?.[0] || null
        }
      } catch (err) {
        debug.supabaseQuery = {
          success: false,
          error: (err as Error).message,
          dataCount: 0
        }
      }

      setDebugInfo(debug)
    }

    checkConnection()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Info</h1>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  )
}