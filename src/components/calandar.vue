<template>
    <div class="calendar montserrat_medium">
        <div class="header">
            <button @click="prevMonth">&lt;</button>
            <h3>{{ currentMonthName() }}</h3>
            <button @click="nextMonth">&gt;</button>
        </div>
        <div class="weekdays">
            <div v-for="day in daysOfWeek" :key="day" class="weekday">{{ day }}</div>
        </div>
        <div class="days">
            <div v-for="day in daysInMonth" :key="day.date"
                :class="{ 'day': true, 'today': isToday(day), 'past': isPast(day.date), 'selected': selectedDay === day.date }"
                @click="chooseDate(day)">
                {{ day.date }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
const daysInMonth = ref([]);
const emit = defineEmits()

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const selectedDay = ref(false)

const monthNames = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
];

function chooseDate(day) {
    if (day.date === null) {
        selectedDay.value = false;
        return
    }else if (isPast(day.date)) {
        selectedDay.value = false;
        return
    } else {
        selectedDay.value = day.date;
        const date = {
            date: day.date,
            month: currentMonth + 1
        };
        emit('update:date', date);
        return
    }
}

function currentMonthName() {
    return monthNames[currentMonth];
}

function isToday(day) {
    const today = new Date();
    return currentYear === today.getFullYear() && currentMonth === today.getMonth() && day.date === today.getDate();
}

function isPast(day) {
    const date = new Date(currentYear, currentMonth, day);
    return date < currentDate;
}

function updateMonth() {
    selectedDay.value = false
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
    const days = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysArray = [];
    let day = 1;
    for (let i = 0; i < 6 * 7; i++) {
        if (i >= startingDayOfWeek && day <= days) {
            daysArray.push({ date: day, dayOfMonth: day });
            day++;
        } else {
            daysArray.push({ date: null, dayOfMonth: null });
        }
    }

    daysInMonth.value = daysArray;
}

function prevMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    updateMonth();
}

function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    updateMonth();
}

updateMonth();
</script>


<style scoped>
.calendar {
    width: 280px;
    border-radius: 5px;
    padding: 10px 0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.weekdays {
    display: flex;
    margin-bottom: 10px;
}

.weekday {
    width: calc(100% / 7);
    text-align: center;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
}

.day {
    padding: 5px;
    display: flex;
    cursor: pointer;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
}

.today{
    background: #d8740195;
    border-radius: 15px;
    color: black !important;
}

.past {
    color: #ccc;
}

.selected {
    background-color: var(--yellow_color);
    border-radius: 15px;
    border: 1px solid var(--orange_color);
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--orange_color);
}
</style>
