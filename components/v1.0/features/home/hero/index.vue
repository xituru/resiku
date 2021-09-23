<template>
  <comm-hero>
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <div class="relative">
        <input
          type="text"
          placeholder="Type something ..."
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
        >
          Search
        </button>
      </div>
    </div>
  </comm-hero>
</template>
