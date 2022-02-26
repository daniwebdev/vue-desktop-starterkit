<template>
    <div class="p-2 grid grid-cols-3 gap-3">
        <div>
            <button primary>
                Primary
            </button>
            <button success>
                Success
            </button>
            <button warning>
                Warning
            </button>
            <button danger>
                Danger
            </button>
        </div>

        <div>
            <button primary sm>
                Primary
            </button>
            <button success sm>
                Success
            </button>
            <button warning sm>
                Warning
            </button>
            <button danger sm>
                Danger
            </button>
        </div>

        <div>
            <div btn-group>
                <button primary>
                    Primary
                </button>
                <button success>
                    Success
                </button>
                <button warning>
                    Warning
                </button>
                <button danger>
                    Danger
                </button>
            </div>
        </div>

        <div>
            <button primary>
                <svg class="inline animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Primary
            </button>
        </div>
    </div>
</template>


<style lang="scss">
    button[primary] {
        @apply bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded text-white;
    }
    button[success] {
        @apply bg-green-600 hover:bg-green-700 py-2 px-3 rounded text-white;
    }
    button[warning] {
        @apply bg-yellow-500 hover:bg-yellow-600 py-2 px-3 rounded text-white;
    }
    button[danger] {
        @apply bg-red-500 hover:bg-red-600 py-2 px-3 rounded text-white;
    }

    button {
        @apply mr-2;
        &:last-child {
            @apply mr-0;
        }

        &[sm] {
            @apply px-2 py-1 text-sm;
        }
    }

    [btn-group] {
        display: flex;
        button {
            @apply rounded-none m-0;

            &:first-child {
                @apply rounded-l;
            }

            &:last-child {
                @apply rounded-r;
            }
        }
    }
</style>