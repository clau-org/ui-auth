<template>
  <div>
    <UiPre :json="{ user, isLoggedIn }" />

    <AuthMagicEmailOTP />
  </div>
</template>

<script setup>
  const { setupMagic, user, isLoggedIn, refreshUser } = useCustomStore(
    useStoreAuthMagic(),
  )

  onMounted(async () => {
    await setupMagic()
    await refreshUser()
  })
</script>
