<template>
    <div class="notificationContainer">
    </div>
</template>

<script lang="ts" setup>
import { readableColor } from "color2k";
import { watch } from "vue"
import { useStore } from "vuex";

const store = useStore()
let notID = 0

function createNotification(notificationText: string, color: any){
    const container = document.querySelector('.notificationContainer')
    const newNotification = document.createElement('div')
    if(color){
        newNotification.style.backgroundColor = color
        newNotification.style.color = readableColor(color)
    }
    newNotification.innerText = notificationText
    container.appendChild(newNotification)
    setTimeout(() => {
        newNotification.classList.add('notification')
    }, 10);
    setTimeout(() => {
        newNotification.classList.remove('notification')
    }, 1500);
    setTimeout(() => {
        newNotification.remove()
    }, 1800);
}

defineExpose({
  createNotification,
});

</script>
