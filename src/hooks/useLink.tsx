import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useMenuStore from '@/stores/store.menu'

export default function useLink() {
  const router = useRouter()
  const { setMenu } = useMenuStore()
  const pathname = usePathname()

  useEffect(() => {
    const path = pathname.split('/')
    setMenu(path[1])
  }, [pathname])

  const onLink = (link: string) => {
    router.push(link + window.location.search)
  }

  const onBack = () => {
    router.back()
  }

  return {
    onLink,
    onBack,
  }
}
