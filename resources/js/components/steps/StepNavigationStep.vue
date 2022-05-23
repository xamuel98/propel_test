<template>
    <li :class="indicatorclass" @click="test" :style="currentstep > step.id ? 'cursor: pointer;' : 'pointer-events: none;'">
        <div class="tab-list__link">
            <span class="step" :data-step="step.id"></span>
        </div>
    </li>
</template>

<script>
export default {
    props: ["step", "currentstep"],
    computed: {
        indicatorclass() {
            return {
                active: this.step.id == this.currentstep,
                complete: this.currentstep > this.step.id
            };
        },
    },
    methods: {
        test() {
            this.$emit('update-step', this.step.id)
        }
    }
}
</script>

<style>

</style>