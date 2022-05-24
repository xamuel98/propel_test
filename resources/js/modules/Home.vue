<template>
    <InfoModal 
        v-show="isModalOpen"
        @close="closeModal" 
    />
    <TheNavbar />
    <BaseSidebar />
    <main class="main-wrapper relative justify-self-auto w-full lg:w-4/6 ml-auto py-7 lg:py-5 overflow-x-hidden">
        <div class="main-wrapper__inner flex flex-col justify-between max-w-xl mx-auto px-6 pt-6 pb-0 lg:p-10 relative bg-transparent">
            <div class="">
                <StepNavigation :steps="steps" :currentstep="currentstep" @update-again="navigateSteps" />
                <div class="flex flex-col justify-start space-y-2">
                    <h1 class="text-black font-semibold text-4xl header-title">
                        Add a profile photo
                    </h1>
                    <p class="text-lg textGrey w-full lg:w-5/6">
                        Before you continue, please take a moment to create your profile
                    </p>
                </div>
                <!-- Select Profile photo -->
                <div class="flex justify-center items-center mt-10">
                    <!-- Selected Photo -->
                    <div class="flex flex-col justify-center items-center" v-if="selectedImage">
                        <img :src="selectedImage" alt="Photo" class="rounded-full w-60 h-60" id="selectedImage">
                        <button class="flex justify-center items-center font-semibold btnBorderRadius p-3 bgOrange50 text-base textGrey mt-3" @click="selectPicture">Change Image</button>
                    </div>

                    <!-- Empty Photo Input -->
                    <div v-else @click="selectPicture" class="rounded-full w-60 h-60 bgRed50 space-y-1 flex flex-col justify-center items-center select-none cursor-pointer">
                        <span class="iconify textBlue w-8 h-8" data-icon="fluent:camera-add-20-regular"></span>
                        <p class="textBlue font-medium text-sm">Upload your picture</p>
                    </div>

                    <!-- File Input -->
                    <input 
                        type="file"
                        hidden
                        ref="fileInput"
                        accept=".png, .jpg, .jpeg"
                        @change="onPicturePicked"
                    />
                </div>
                <!-- Buttons -->
                <div class="flex justify-between items-center mt-20">
                    <button type="button" class="flex justify-center items-center border border-white btnBorderRadius p-4 bgOrange50 textGrey text-base font-semibold">
                        Back
                    </button>
                    <button type="button" @click="saveAndContinue" :disabled="!selectedImage" :class="{'disabled opacity-50': !selectedImage}" class="flex justify-center items-center btnBorderRadius p-3 bgBlue400 text-white text-base font-semibold shadowBlue">
                        Save & continue
                    </button>
                </div>
            </div>
            <ul class="list-none mx-auto flex lg:hidden flex-wrap justify-start items-center gap-y-3 gap-x-3 lg:gap-x-8 extra-links">
                <li class="extra-links__li">
                    <a href="javascript:void(0)" class="extra-links__link">©Propel, {{new Date().getFullYear()}}</a>
                </li>
                <li class="extra-links__li">
                    <a href="javascript:void(0)" class="extra-links__link">Privacy policy</a>
                </li>
                <li class="extra-links__li">
                    <a href="javascript:void(0)" class="extra-links__link">Contact us</a>
                </li>
                <li class="extra-links__li">
                    <a href="javascript:void(0)" class="extra-links__link">Terms of use</a>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import BaseSidebar from '../components/BaseSidebar.vue';
import TheNavbar from '../components/TheNavbar.vue';
import InfoModal from '../components/InfoModal.vue';
import StepNavigation from '../components/steps/StepNavigation.vue';

export default {
    components: {
        BaseSidebar,
        TheNavbar,
        InfoModal,
        StepNavigation
    },
    data() {
        return {
            currentstep: 3,
            steps: [
                {
                    id: 1,
                    title: "Title 1"
                },
                {
                    id: 2,
                    title: 'Title 2'
                },
                {
                    id: 3,
                    title: "Title 3"
                },
            ],
            isModalOpen: false,
            selectedImage: null,
        }
    },
    methods: {
        closeModal() {
            this.isModalOpen = false;
        },  
        selectPicture() {
            this.$refs.fileInput.click();
        },
        onPicturePicked(event) {
            const files = event.target.files;
            let filename = files[0].name;

            if (filename.lastIndexOf(".") <= 0) {
                return alert("Please add a valid file!");
            }

            const fileReader = new FileReader();
            fileReader.addEventListener("load", () => {
                this.selectedImage = fileReader.result;
                if (document.getElementById('selectedImage')) document.getElementById('selectedImage').setAttribute("src", window.URL.createObjectURL(files[0]));
            });
            fileReader.readAsDataURL(files[0]);
        },
        // Open modal when button is clicked
        saveAndContinue() {
            this.isModalOpen = true;
        },
        // Click on step number to navigate between steps
        navigateSteps(step) {
            return
            // this.currentstep = step
        },
    }
}
</script>

<style scoped>
.main-wrapper {
    height: 100vh;
    display: grid;
}

.main-wrapper__inner {
    grid-row: 2/3;
}

.header-title {
    font-family: "Gilroy", sans-serif;
}
</style>