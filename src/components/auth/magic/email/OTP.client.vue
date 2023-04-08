<template>
  <div class="bg-bleu-500">
    <UiPre :json="{ input, data, isLoading, error }" />

    <div v-show="!isLoggedIn" class="p-3 bg-green-500">
      <input v-model="input.email" :disabled="isLoading" />
      <button @click="loginWithEmailOTP" :disabled="isLoading">
        <span>Login With Email OTP</span>
      </button>
    </div>

    <button v-show="isLoggedIn" @click="logout" :disabled="isLoading">
      Logout
    </button>
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
