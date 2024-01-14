<script setup>
const props = defineProps({
    color: {
        type: String,
    default: '#ababab'
}})
</script>

<template>
    <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>                                 
    </div>    
</template>