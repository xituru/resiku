<template>
  <div class="relative">
    <input
      ref="input"
      type="text"
      :placeholder="placeholder"
      class="
        w-full
        pr-16
        input input-primary input-bordered
        focus:ring
        ring-gray-400 ring-offset-1
        border border-gray-500
        rounded-full
        bg-transparent
      "
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
      @focus="onFocus"
      @input="onInput"
      @keydown="onKeyDown"
      @keyup="onKeyUp"
      @keypress="onKeyPress"
    />
    <button
      class="
        absolute
        top-0
        right-0
        btn btn-primary
        rounded-full
        bg-gray-800
        dark:bg-gray-500
        text-gray-50
        dark:text-current
        hover:bg-opacity-80
      "
      @click="onSearch"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
