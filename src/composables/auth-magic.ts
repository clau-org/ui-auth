import { defineStore } from 'pinia'
import { Magic } from 'magic-sdk'
import { OAuthExtension } from '@magic-ext/oauth'

export const useStoreAuthMagic = defineStore('MagicLink', () => {
  const { MAGICLINK_KEY, BASE_SITE } = useConfig()

  let authMagic: any = null

  function setupMagic() {
    authMagic = new Magic(MAGICLINK_KEY, {
      extensions: [new OAuthExtension()],
    })
  }

  logger.debug('[magicAuth initiated]')

  const user: any = ref(null)

  const isLoggedIn = computed(() => {
    return !!user.value
  })

  async function refreshUser() {
    user.value = await authMagic.user.getMetadata()
    logger.debug({
      user: user.value,
    })
  }

  async function logout() {
    await authMagic.user.logout()
    user.value = null
  }

  function useLoginWithEmailOTP() {
    return useAsyncFn({
      input: { email: '', showUI: true },
      fn: async (input: any) => {
        const response = await authMagic.auth.loginWithEmailOTP(input)
        await refreshUser()
        return response
      },
    })
  }

  return {
    setupMagic,

    user,

    logout,

    isLoggedIn,

    useLoginWithEmailOTP,
    refreshUser,
  }
})
