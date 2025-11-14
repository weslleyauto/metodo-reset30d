'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="sm"
      className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
    >
      <LogOut className="w-4 h-4" />
      Sair
    </Button>
  )
}
