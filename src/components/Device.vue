<template>
  <div class="device">
    <div class="marvel-device iphone8 silver">
      <div class="top-bar"></div>
      <div class="sleep"></div>
      <div class="volume"></div>
      <div class="camera"></div>
      <div class="sensor"></div>
      <div class="speaker"></div>
      <div class="screen">
        <!-- Content goes here -->
        <slot />
      </div>
      <div class="home"></div>
      <div class="bottom-bar"></div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../assets/device.styl'
.device
  position: relative
  height: 630px
  padding: 16px
  overflow: hidden
  align-content: center
  & > div
    transform: scale(0.7)
    transform-origin: top left
</style>
