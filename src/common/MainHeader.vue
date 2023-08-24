<template>
  <div
    class="h-[40px] bg-[#111012] text-white flex items-center justify-between grow p-[10px]"
  >
    <router-link to="/">
      <div>Game Tracker</div>
    </router-link>
    <div class="flex gap-x-[30px]">
      <router-link to="/">
        <div>Главная</div>
      </router-link>
      <router-link to="/about">
        <div>О сервисе</div>
      </router-link>
    </div>
  </div>
</template>
