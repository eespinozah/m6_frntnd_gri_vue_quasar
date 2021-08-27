<template>
  <div
    class="
      flex flex-col
      space-y-4
      fixed
      flex
      justify-center
      items-center
      inset-0
      z-50
      outline-none
      focus:outline-none
    "
    :class="{ 'bg-gray-900': darkMode }"
  >
    <div
      class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              w-16
              h-16
              rounded-2xl
              p-3
              border border-blue-100
              text-blue-400
              bg-blue-50
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div class="flex flex-col ml-3">
            <div class="font-medium leading-none">Delete Your Acccount ?</div>
            <p class="text-sm text-gray-600 leading-none mt-1">
              By deleting your account you will lose your all data
            </p>
          </div>
        </div>
        <button
          class="
            flex-no-shrink
            bg-green-500
            px-5
            ml-4
            py-2
            text-sm
            shadow-sm
            hover:shadow-lg
            font-medium
            tracking-wider
            border-2 border-green-500
            text-white
            rounded-full
          "
        >
          Guardar
        </button>
      </div>
    </div>

    <div
      class="
        flex flex-col
        p-8
        bg-gray-800
        shadow-md
        hover:shodow-lg
        rounded-2xl
      "
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              w-16
              h-16
              rounded-2xl
              p-3
              border border-gray-800
              text-blue-400
              bg-gray-900
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div class="flex flex-col ml-3">
            <div class="font-medium leading-none text-gray-100">
              Delete Your Acccount ?
            </div>
            <p class="text-sm text-gray-500 leading-none mt-1">
              By deleting your account you will lose your all data
            </p>
          </div>
        </div>
        <button
          class="
            flex-no-shrink
            bg-red-500
            px-5
            ml-4
            py-2
            text-sm
            shadow-sm
            hover:shadow-lg
            font-medium
            tracking-wider
            border-2 border-red-500
            text-white
            rounded-full
          "
        >
          Eliminar
        </button>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  setup() {
    return {
      darkMode: true,
    };
  },
};
</script>
