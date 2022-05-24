<template>
     <div class="hidden lg:block fixed top-0 left-0 h-full w-2/6 overflow-hidden bgOrange50 justify-center items-center">
        <div class="z-10 absolute bottom-3 mx-auto w-full flex justify-start flex-col px-16 space-y-10">
            <ul class="list-none mx-auto flex flex-wrap justify-start items-center gap-x-8 extra-links">
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
    </div>
</template>

<script>
export default {
    name: "BaseSidebar"
}
</script>

<style>

</style>