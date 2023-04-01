<template>
  <div class="bg-green-500">
    <span>Login With Email OTP</span>
    <UiPre :json="{ input, data, isLoading, error }" />
    <div v-show="!isLoggedIn" class="p-3 ">
      <input v-model="input.email" :disabled="isLoading" />
      <button @click="loginWithEmailOTP" :disabled="isLoading">
        <span>Login With Email OTP</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  const { logout, isLoggedIn, useLoginWithEmailOTP } = useCustomStore(
    useStoreAuthMagic(),
  )

  const {
    input,
    fn: loginWithEmailOTP,

    data,
    error,

    isLoading,
  } = useLoginWithEmailOTP()
</script>
