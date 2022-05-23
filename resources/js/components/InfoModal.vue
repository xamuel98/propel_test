<template>
    <transition name="modal-fade" mode="out-in">
        <div class="modal-backdrop">
            <div class="modal fade show overflow-auto"
                style="display: block"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <div class="modal-dialog modal-dialog-centered relative flex-row-reverse" @click.stop role="document">
                    <button class="bg-transparent rounded-full w-6 h-6 close-icon" @click="close">
                        <span class="iconify w-6 h-6" data-icon="carbon:close-filled" style="color: #f2f2f2;"></span>
                    </button>
                    <div class="modal-content w-full lg:w-4/5">
                        <div class="rounded-t-3xl bgBlue50 relative px-7 pt-12 pb-6 overflow-hidden select-none">
                            <img src="../../images/pattern.svg" alt="" class="absolute -top-4 right-0">
                            <p class="modal-content__header relative font-normal w-full lg:w-3/5">
                                Would you like to join 
                                <span class="font-semibold border-b-2 border-black">GirlsCanCode</span> 
                                <span class="font-semibold">?</span>
                            </p>
                        </div>
                        <div class="px-8 pb-8 pt-6 space-y-10">
                            <div class="">
                                <p class="textBlue font-semibold text-base mb-4">It appears you don’t have a community yet</p>
                                <ul class="space-y-2 list-disc instruction-steps">
                                    <li class="instruction-steps__step">
                                        Joining a Propel community gives you access to perks, services, and jobs well suited to your career goals.
                                    </li>
                                    <li class="instruction-steps__step">
                                        Please note you can’t join more than one community at a time, so please choose carefully
                                    </li>
                                    <li class="instruction-steps__step">
                                        We encourage you to provide accurate information about your background and professional experience, and take that first step to apply!
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-wrap gap-y-4 justify-center lg:justify-between items-center">
                                <a href="#" class="p-4 bg-transparent btnBorderRadius join-community">
                                    <span>Join a different community</span>
                                </a>
                                <button type="button" class="flex justify-center cursor-pointer items-center btnBorderRadius p-3 bgBlue400 hover:bg-black transition-all text-white text-base font-semibold shadowBlue">
                                    <span class="iconify text-white w-6 h-6 mr-2" data-icon="fluent:person-add-24-regular"></span>
                                    Join GirlsCanCode
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    /* cursor: pointer; */
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    transition: opacity .3s ease;
    z-index: 9998;
    justify-content: center;
    align-items: center;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}

.modal-dialog-centered {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 0;
}

.modal.show .modal-dialog {
    -webkit-transform: none;
    transform: none;
}

.modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
}
.modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    /* pointer-events: none; */
}

@media (max-width: 600px) {
    .modal-dialog-centered {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100% - 1rem);
    }
}

.modal-content {
    width: 100%;
}

.modal-content {
    background: #FFFFFF;
    border-radius: 24px;
}

.modal-content__header {
    font-family: "Gilroy-Regular", sans-serif;
    font-size: 40px;
    line-height: 110%;
    letter-spacing: -0.01em;
}
.modal-content__header > span {
    font-family: "Gilroy", sans-serif;
}

.instruction-steps {
    margin: auto 1.2rem;
}

.instruction-steps .instruction-steps__step {
    font-weight: 300;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #000000;
}

.join-community > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    text-decoration-line: underline;
    color: #384747;
}

.close-icon {
    position: absolute;
    right: -4%;
    top: 16%;
}

.close-icon:hover {
    color: red;
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 653px;
        margin: 1.75rem auto;
    }

    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem);
    }
}

@media only screen and (max-width: 600px) {
    .modal-content__header {
        font-size: 30px;
    }

    .close-icon {
        right: -1%;
        top: 5%;
    }
}
</style>