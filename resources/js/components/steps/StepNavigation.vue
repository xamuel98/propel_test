<template>
    <ol class="step-indicator">
        <component v-for="step in steps" :is="s" :key="step.id" :step="step" :currentstep="currentstep" @update-step="update">
        </component>
    </ol>
</template>

<script>
import StepNavigationStep from './StepNavigationStep';
import { markRaw } from "vue";

export default {
    props: ["steps", "currentstep"],
    components: {
        'step-navigation-step': markRaw(StepNavigationStep)
    },
    data() {
        return {
            s: StepNavigationStep
        }
    },
    methods: {
        update(step) {
            this.$emit('update-again', step)
        },
    },
}
</script>

<style>
.step-indicator {
    list-style: none;
    /* text-align: center; */
    padding: 25px 0;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    position: relative;
}
.step-indicator li {
    display: inline-block;
    transition: all .4s ease;
    padding: 0 35px;
}
.step-indicator li:first-child {
    padding-left: 0;
}
.step-indicator li:not(:last-of-type)::after {
    content: '';
    height: 2px;
    background: #0080FF;
    position: absolute;
    width: 21%;
    top: 50%;
    transform: translateX(0%);
}
.step-indicator li div {
    font-weight: 600;
    font-size: 14px;
    color: #808080;
    display: inline-block;
    background: #fff;
    width: 100%;
    text-align: center;
}
.step-indicator li div span.step {
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #808080;
    box-sizing: border-box;
    font-size: 15px;
    /* margin: 0 10px; */
}
.step-indicator li div span.step::before {
    content: attr(data-step);
}
.step-indicator li.active div span.step {
    background: #0080FF;
    border-color: #0080FF;
    color: #fff;
}
.step-indicator li div span.desc {
    text-transform: capitalize;
    display: none;
}

.step-indicator li.complete div span.step{
    background: #0080FF;
    border-color: #0080FF;
}
.step-indicator li.complete div span.step:before {
    content: url('../../../images/step-check.svg');
}

@media only screen and (min-width: 992px) {
    /* .step-indicator li div {
        padding-right: 10px;
    } */
    .step-indicator li div span.desc {
        display: inline-block;
    }
    .step-indicator li:not(:last-of-type)::after {
        width: 15%;
    }
}
</style>